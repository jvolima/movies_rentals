import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
import { IMoviesRepository } from "../../../movies/repositories/IMoviesRepository";
import { IRentalsRepository } from "../../repositories/IRentalsRepository";

@injectable()
class DevolutionRentalUseCase {
  constructor (
    @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository,
    @inject("MoviesRepository")
    private moviesRepository: IMoviesRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider
  ) {}

  async execute(rental_id: string, user_id: string) {
    const rental = await this.rentalsRepository.findById(rental_id);

    if(!rental) {
      throw new AppError("Rental does not exists!");
    }

    const movie = await this.moviesRepository.findById(rental.movie_id);

    const minimum_daily = 1;

    const dateNow = this.dateProvider.dateNow();

    let daily = this.dateProvider.compareInDays(rental.start_at, dateNow);
    
    if(daily <= 0) {
      daily = minimum_daily;
    }

    const delay = this.dateProvider.compareInDays(rental.expected_return_date, dateNow);

    let total = 0;

    if(delay > 0) {
      total = delay * movie.fine_amount;
    }

    total += daily * movie.daily_rate;

    const rentalUpdated = await this.rentalsRepository.updateRental(
      rental_id,
      total,
      dateNow
    );

    await this.moviesRepository.updataAvailable(movie.id, true);

    return rentalUpdated;
  }
}

export { DevolutionRentalUseCase }