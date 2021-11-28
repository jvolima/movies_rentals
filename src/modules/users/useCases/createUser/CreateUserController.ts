import { Request, Response } from "express"
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

const usersRepository = new UsersRepository()

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const createUserUseCase = new CreateUserUseCase(usersRepository);

    const user = await createUserUseCase.execute({
      name,
      email,
      password
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController }