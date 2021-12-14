import { Rental } from "@prisma/client";
import { ICreateRentalsDTO } from "../dtos/ICreateRentalsDTO";

interface IRentalsRepository {
  create({ user_id, movie_id, expected_return_date }: ICreateRentalsDTO): Promise<Rental>
  findOpenRentalByUser(user_id: string): Promise<Rental>
  findById(id: string): Promise<Rental>
  updateRental(id: string, total: number, end_at: Date): Promise<Rental>
}

export { IRentalsRepository }