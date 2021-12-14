import { Movie, Rental } from "@prisma/client";
import prismaClient from "../../../../prisma";
import { ICreateRentalsDTO } from "../../dtos/ICreateRentalsDTO";
import { IRentalsRepository } from "../IRentalsRepository";

class RentalsRepository implements IRentalsRepository {
  async create({ user_id, movie_id, expected_return_date }: ICreateRentalsDTO): Promise<Rental> {
    const rental = await prismaClient.rental.create({
      data: {
        user_id,
        movie_id,
        expected_return_date,
      }
    });

    return rental;
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    const openRental = await prismaClient.rental.findFirst({
      where: {
        user_id,
        end_at: null
      }
    });

    return openRental as Rental;
  }

  async findById(id: string): Promise<Rental> {
    const rental = await prismaClient.rental.findFirst({
      where: { id }
    });

    return rental as Rental;
  }

  async updateRental(id: string, total: number, end_at: Date): Promise<Rental> {
    const rental = await prismaClient.rental.update({
      where: { 
        id 
      },
      data: {
        total,
        end_at
      }
    });

    return rental;
  }
}

export { RentalsRepository }