import { Movie } from ".prisma/client";
import prismaClient from "../../../../prisma";
import { ICreateMoviesDTO } from "../../dtos/ICreateMoviesDTO";
import { IMoviesRepository, IRequest } from "../IMoviesRepository";


class MoviesRepository implements IMoviesRepository {
  async create({ name, description, daily_rate, fine_amount, genre_id }: ICreateMoviesDTO): Promise<Movie> {
    const movie = await prismaClient.movie.create({
      data: {
        name,
        description,
        daily_rate,
        fine_amount,
        genre_id,
        available: true
      }
    });

    return movie;
  }

  async list({ name, genre_id }: IRequest): Promise<Movie[]> {
    const availableMovies = await prismaClient.movie.findMany({
      where: { 
        available: true
      }
    });

    if(name) {
      const movies = availableMovies.filter((movie) => movie.name === name);
      return movies;
    }
    else if(genre_id) {
      const movies = availableMovies.filter((movie) => movie.genre_id === genre_id);
      return movies;
    }

    return availableMovies;
  }

  async findUnavailableById(id: string): Promise<Movie> {
    const movieUnavailable = await prismaClient.movie.findFirst({
      where: { 
        id,
        available: false
      }
    });

    return movieUnavailable as Movie;
  }

  async updataAvailable(id: string, available: boolean): Promise<void> {
    await prismaClient.movie.update({
      where: {
        id
      },
      data: {
        available
      }
    })
  }

  async findById(id: string): Promise<Movie> {
    const movie = await prismaClient.movie.findFirst({
      where: { id }
    });

    return movie as Movie;
  }
}

export { MoviesRepository }