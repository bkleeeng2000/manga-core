import {IDataSource} from '../Interface/DataSource/IDataSource';

class MariaDB implements IDataSource
{
    async getAll(): Promise<any> {
        return Promise.resolve(undefined);
    }
    async getAllId(): Promise<Array<number>> {
        return [];
    }
    getById(id: number): Promise<any> {
        return Promise.resolve(undefined);
    }

    async insert(item: any): Promise<void> {
    }

    async insertItems(item: any[]): Promise<void> {
    }
}
