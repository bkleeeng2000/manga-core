import {IDataSource} from '../Interface/DataSource/IDataSource';

class ManaTokki implements IDataSource {
    async getAll(): Promise<any> {
        return Promise.resolve(undefined);
    }

    async getAllId(): Promise<Array<number>> {
        return [];
    }

    async getById(id: number): Promise<any> {
        return Promise.resolve(undefined);
    }

    async insert(item: any): Promise<void> {
    }

    async insertItems(item: any[]): Promise<void> {
    }

}
