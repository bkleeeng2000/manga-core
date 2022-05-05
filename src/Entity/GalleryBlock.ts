import {UrlTuple} from './UrlTuple';

export class GalleryBlock {
    readonly id: number = 0;
    readonly url: string = '';
    readonly thumbnails: Array<string> = [];
    readonly title: string = '';
    readonly artists: Array<UrlTuple> = [];
    readonly series: Array<string> = [];
    readonly type: UrlTuple;
    readonly language: string = '';
    readonly relatedTags: Array<UrlTuple> = [];


    constructor(id: number, url: string, thumbnails: Array<string>, title: string, artists: Array<UrlTuple>,
                series: Array<string>, type: UrlTuple, language: string, relatedTags: Array<UrlTuple>) {
        this.id = id;
        this.url = url;
        this.thumbnails = thumbnails;
        this.title = title;
        this.artists = artists;
        this.series = series;
        this.type = type;
        this.language = language;
        this.relatedTags = relatedTags;
    }
}
