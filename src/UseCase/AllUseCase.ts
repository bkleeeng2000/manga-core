import {IMangaRepository} from '../Interface/Repository/IMangaRepository';

export class AllUseCase {
    private readonly repository: IMangaRepository;

    constructor(repository: IMangaRepository) {
        this.repository = repository;
    }

    async getAll() {
        const mangas = await this.repository.mirroring();

        // mangas.forEach(manga => {
        //     console.log(`id: ${manga.id}, title: ${manga.title}`);
        // });
    }
}
