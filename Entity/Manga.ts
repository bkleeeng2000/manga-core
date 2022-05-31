export class Manga {
    readonly id: number = 0;
    readonly url: string = '';
    readonly thumbnails: Array<string> = [];
    readonly title: string = '';
    readonly artists: Array<string> = [];
    readonly series: Array<string> = [];
    readonly type: string = '';
    readonly language: string = '';
    readonly relatedTags: Array<string> = [];


    constructor(id: number, url: string, thumbnails: Array<string>, title: string, artists: Array<string>,
                series: Array<string>, type: string, language: string, relatedTags: Array<string>) {
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
