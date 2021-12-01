import { container } from "tsyringe";
import { IGenresRepository } from "../../modules/genres/repositories/IGenresRepository";
import { GenresRepository } from "../../modules/genres/repositories/implementations/GenresRepository";
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