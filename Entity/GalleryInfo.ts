export interface Parody {
    parody: string;
    url: string;
}

export interface Group {
    url: string;
    group: string;
}

export interface File {
    hash: string;
    width: number;
    name: string;
    hasavif: number;
    haswebp: number;
    height: number;
}

export interface Language {
    galleryid: string;
    language_localname: string;
    url: string;
    name: string;
}

export interface Character {
    url: string;
    character: string;
}

export interface Artist {
    url: string;
    artist: string;
}

export interface Tag {
    tag: string;
    female: boolean;
    url: string;
    male: boolean;
}

export interface GalleryInfo {
    id: string;
    galleryurl: string;
    parodys: Parody[];
    groups: Group[];
    title: string;
    date: string;
    language_localname: string;
    language_url: string;
    type: string;
    tags?: Tag[];
    video?: any;
    files: File[];
    videofilename?: any;
    languages: Language[];
    scene_indexes: any[];
    related: number[];
    characters: Character[];
    artists?: Artist[];
    language: string;
    japanese_title?: any;
}

export interface Manga {
    id: number;
    length: number;
    files: Array<string>;
    title: string;
    artists?: Array<string>;
    tags?: Array<Tag>;
    date: string;
}