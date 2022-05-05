import {Manga} from '../../Entity/Manga';

export interface IMangaRepository {
    getAll(): Promise<Manga[]>;

    getManga(mangaId: number): Promise<Manga>;
}
