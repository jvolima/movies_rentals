import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IDateProvider } from "../../../../shared/container/providers/IDateProvider";
import { IMoviesRepository } from "../../../movies/repositories/IMoviesRepository";
import { ICreateRentalsDTO } from "../../dtos/ICreateRentalsDTO";
import { IRentalsRepository } from "../../repositories/IRentalsRepository";

@injectable()
class CreateRentalUseCase {
  constructor (
    @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository,
    @inject("MoviesRepository")
    private moviesRepository: IMoviesRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider
  ) {}

  async execute({ user_id, movie_id, expected_return_date }: ICreateRentalsDTO) {
    const minimumHours = 24;

    const userOpenRental = await this.rentalsRepository.findOpenRentalByUser(user_id)

    if(userOpenRental) {
      throw new AppError("User have an open rental!");
    }

    const movieUnavailable = await this.moviesRepository.findUnavailableById(movie_id)

    if(movieUnavailable) {
      throw new AppError("Movie is unavailable!");
    }

    const compareHours = this.dateProvider.compareInHours(
      this.dateProvider.dateNow(),
      expected_return_date
    )

    if(compareHours < minimumHours) {
      throw new AppError("Invalid time!")
    }

    const rental = await this.rentalsRepository.create({
      user_id,
      movie_id,
      expected_return_date
    });

    await this.moviesRepository.updataAvailable(movie_id, false);

    return rental;
  }
}

export { CreateRentalUseCase }