import {IMangaRepository} from '../Interface/Repository/IMangaRepository';
import {Manga} from '../Entity/Manga';
import {IDataSource} from '../Interface/DataSource/IDataSource';


export class MangaRepository implements IMangaRepository {

    private readonly remoteDataSource: IDataSource;
    private readonly dataBaseDataSource: IDataSource;


    constructor(remoteDataSource: IDataSource, dataBaseDataSource: IDataSource) {
        this.remoteDataSource = remoteDataSource;
        this.dataBaseDataSource = dataBaseDataSource;
    }

    async getAll(): Promise<Manga[]> {
        let remoteTask = this.remoteDataSource.getAllId();
        let dbTask = this.dataBaseDataSource.getAllId();

        let remoteIds = await remoteTask;
        let dbIds = await dbTask;
        // let dbIds: number[] = [0, 1];
        let updatedIds = remoteIds.filter(value => !dbIds.includes(value));
        // await this.dataBaseDataSource.insertItems(updatedIds);

        return await this.remoteDataSource.getAll();
    }

    async getManga(mangaId: number): Promise<Manga> {
        return new Manga(0, '', [], '', [], [], '', '', []);
    }
}
