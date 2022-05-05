import {IDataSource} from '../Interface/DataSource/IDataSource';
import axios, {AxiosResponse} from 'axios';
import {GalleryBlock} from '../Entity/GalleryBlock';
import cheerio from 'cheerio';
import {UrlTuple} from '../Entity/UrlTuple';
import throttledQueue from 'throttled-queue';

const throttle = throttledQueue(100, 1000, true);

export class Hitomi implements IDataSource {
    private lang = 'korean';

    private static toArrayBuffer(buffer: Buffer): ArrayBuffer {
        const ab = new ArrayBuffer(buffer.length);
        const view = new Uint8Array(ab);
        for (let i = 0; i < buffer.length; ++i) {
            view[i] = buffer[i];
        }
        return ab;
    }

    async getAllId(): Promise<Array<number>> {
        const idList: Array<number> = [];

        try {
            const response = await axios.get<any, AxiosResponse<Buffer>>(`https://ltn.hitomi.la/index-${this.lang}.nozomi`, {
                headers: {'Range': 'bytes=0-799'},
                // headers: {'Range': 'bytes=0-399'},
                responseType: 'arraybuffer'
            });

            const view = new DataView(Hitomi.toArrayBuffer(response.data));

            for (let i = 0; i < view.byteLength / 4; ++i) {
                const id: number = view.getInt32(i * 4, false);
                idList.push(id);
            }
        } catch (exception) {
            console.log(exception);
        }

        return idList;
    }

    async getAll(): Promise<any> {
        const list: Array<GalleryBlock> = [];

        const idList: Array<number> = await this.getAllId();

        await Promise.all(idList.map(async id => {
            try {
                const response: AxiosResponse = await throttle(() => axios.get(`https://ltn.hitomi.la/galleryblock/${id}.html`));
                let block = this.MakeGalleryBlock(response, id);
                console.log(block);
                list.push(block);
            } catch (e) {
                console.log(`Exception!! Id: ${id}, Exception : ${e}`);
            }
        }));
        list.sort((a, b) => b.id - a.id);
        return list;
    }

    async getById(id: number): Promise<any> {
        const result: AxiosResponse = await throttle(() => axios.get(`https://ltn.hitomi.la/galleryblock/${id}.html`));
        return this.MakeGalleryBlock(result, id);
    }

    async insert(item: any): Promise<void> {
        throw "Not Implementation"
    }

    async insertItems(item: any[]): Promise<void> {
        throw "Not Implementation"
    }

    private MakeGalleryBlock(body: AxiosResponse, id: number) {
        const $ = cheerio.load(body.data);
        const title: string = $('h1.lillie').text().toString();
        const tags: UrlTuple[] = $('td.relatedtags li a').map((i, el) => {
            const href = $(el).attr('href')?.match(/(?<=\/tag\/)(.*?)(?=-)/g)?.pop() ?? '';
            const text = $(el).text() ?? '';
            return {Url: href, Name: text};

        }).toArray();
        const typeObject = $('.dj-desc tr:contains("Type") a');
        const type: UrlTuple = {
            Url: typeObject.attr('href')?.match(/(?<=\/type\/)(.*?)(?=-)/g)?.pop() ?? '',
            Name: typeObject.text() ?? ''
        };

        const artists: UrlTuple[] = $('div.artist-list li a').map((i, el) => {
            const href = $(el).attr('href')?.match(/(?<=\/artist\/)(.*?)(?=-)/g)?.pop() ?? '';
            const text = $(el).text() ?? '';
            return {Url: href, Name: text};
        }).toArray();

        const thumbnails: string[] = $('source')
            .map((i, el) => $(el).attr('data-srcset')?.match(/(?<=\/\/)(.*?)(?= 2x)/g)?.pop() ?? '')
            .toArray();

        return new GalleryBlock(id, '', thumbnails, title, artists, [], type, '', tags);
    }
}
