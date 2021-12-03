import { inject, injectable } from "tsyringe";
import { IGenresRepository } from "../../repositories/IGenresRepository";

@injectable()
class ListGenresUseCase {
  constructor (
    @inject("GenresRepository")
    private genresRepository: IGenresRepository
  ) {}

  async execute() {
    const genres = await this.genresRepository.list();

    return genres;
  }
}

export { ListGenresUseCase }