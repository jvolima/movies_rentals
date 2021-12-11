import { Rental } from "@prisma/client";
import prismaClient from "../../../../prisma";
import { ICreateRentalsDTO } from "../../dtos/ICreateRentalsDTO";
import { IRentalsRepository } from "../IRentalsRepository";

class RentalsRepository implements IRentalsRepository {
  async create({ user_id, movie_id, expected_return_date }: ICreateRentalsDTO): Promise<Rental> {
    const rental = await prismaClient.rental.create({
      data: {
        user_id,
        movie_id,
        expected_return_date
      }
    });

    return rental;
  }
}

export { RentalsRepository }