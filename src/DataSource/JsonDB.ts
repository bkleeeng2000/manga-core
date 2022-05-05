import {IDataSource} from '../Interface/DataSource/IDataSource';


export class JsonDataSource implements IDataSource {
    private path: string;

    constructor(path: string) {
        this.path = path;
    }

    async getAll(): Promise<any> {

        return Promise.resolve(undefined);
    }

    async getAllId(): Promise<Array<number>> {
        return [0, 1, 2];
    }

    getById(id: number): Promise<any> {
        return Promise.resolve(undefined);
    }

    async insert(item: any): Promise<void> {
        throw 'Not Implementation';
    }

    async insertItems(item: any[]): Promise<void> {

    }
}
