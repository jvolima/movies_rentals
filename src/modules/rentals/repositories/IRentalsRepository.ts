import { Rental } from "@prisma/client"
import { ICreateRentalsDTO } from "../dtos/ICreateRentalsDTO"

interface IRentalsRepository {
  create({ user_id, movie_id, expected_return_date, id, total, end_date }: ICreateRentalsDTO): Promise<Rental>
}

export { IRentalsRepository }