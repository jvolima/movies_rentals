import { Rental } from "@prisma/client";
import prismaClient from "../../../../prisma";
import { ICreateRentalsDTO } from "../../dtos/ICreateRentalsDTO";
import { IRentalsRepository } from "../IRentalsRepository";


class RentalsRepository implements IRentalsRepository {
  async create({ user_id, movie_id, expected_return_date, id, total, end_date }: ICreateRentalsDTO): Promise<Rental> {
    const rental = await prismaClient.rental.create({
      data: {
        id,
        user_id,
        movie_id,
        expected_return_date,
        total: total as number,
        end_date: end_date as Date
      }
    });
    
    return rental;
  }
}

export { RentalsRepository }