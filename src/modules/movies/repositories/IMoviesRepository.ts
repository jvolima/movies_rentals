import { Movie } from "@prisma/client";
import { ICreateMoviesDTO } from "../dtos/ICreateMoviesDTO";

interface IRequest {
  name?: string;
  genre_id?: string;
}

interface IMoviesRepository {
  create({ name, description, daily_rate, fine_amount, genre_id }: ICreateMoviesDTO): Promise<Movie> 
  list({ name, genre_id }: IRequest): Promise<Movie[]>
}

export { IMoviesRepository, IRequest }