import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IGenresRepository } from "../../../genres/repositories/IGenresRepository";
import { ICreateMoviesDTO } from "../../dtos/ICreateMoviesDTO";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";

@injectable()
class CreateMoviesUseCase {
  constructor (
    @inject("MoviesRepository")
    private moviesRepository: IMoviesRepository,
    @inject("GenresRepository")
    private genresRepository: IGenresRepository
  ) {}

  async execute({ name, description, daily_rate, fine_amount, genre_id }: ICreateMoviesDTO) {
    const genreExists = await this.genresRepository.findById(genre_id);

    if(!genreExists) {
      throw new AppError("Genre does not exists!", 404)
    }

    const movie = await this.moviesRepository.create({
      name,
      description,
      daily_rate,
      fine_amount,
      genre_id,
    });

    return movie;
  }
}

export { CreateMoviesUseCase }