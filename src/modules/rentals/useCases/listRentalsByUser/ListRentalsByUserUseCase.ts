import { inject, injectable } from "tsyringe";
import { IRentalsRepository } from "../../repositories/IRentalsRepository";

@injectable()
class ListRentalsByUserUseCase {
  constructor (
    @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository
  ) {}

  async execute(user_id: string) {
    const rentals = await this.rentalsRepository.findRentalsByUserId(user_id);

    return rentals;
  }
}

export { ListRentalsByUserUseCase }