import { inject, injectable } from "tsyringe";
import { IMoviesRepository, IRequest } from "../../repositories/IMoviesRepository";
import { IGenresRepository } from "../../../genres/repositories/IGenresRepository";

@injectable()
class ListMoviesUseCase {
  constructor (
    @inject("MoviesRepository")
    private moviesRepository: IMoviesRepository,
    @inject("GenresRepository")
    private genresRepository: IGenresRepository
  ) {}

  async execute({ name, genre_id }: IRequest) {
    const movies = await this.moviesRepository.list({ name, genre_id });

    return movies;
  }
}

export { ListMoviesUseCase }