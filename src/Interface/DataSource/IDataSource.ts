export interface IDataSource {
    getAll(): Promise<any>;

    getAllId(): Promise<Array<number>>;

    getById(id: number): Promise<any>;

    insert(item: any): Promise<void>;

    insertItems(item: any[]): Promise<void>;
}
