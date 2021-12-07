import { container } from "tsyringe";
import { IGenresRepository } from "../../modules/genres/repositories/IGenresRepository";
import { GenresRepository } from "../../modules/genres/repositories/implementations/GenresRepository";
import { IMoviesImagesRepository } from "../../modules/movies/repositories/IMoviesImagesRepository";
import { IMoviesRepository } from "../../modules/movies/repositories/IMoviesRepository";
import { MoviesImagesRepository } from "../../modules/movies/repositories/implementations/MoviesImagesRepository";
import { MoviesRepository } from "../../modules/movies/repositories/implementations/MoviesRepository";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)

container.registerSingleton<IGenresRepository>(
  "GenresRepository",
  GenresRepository
)

container.registerSingleton<IMoviesRepository>(
  "MoviesRepository",
  MoviesRepository
)

container.registerSingleton<IMoviesImagesRepository>(
  "MoviesImagesRepository",
  MoviesImagesRepository
)