import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor (
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, email, password }: ICreateUsersDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if(userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const passwordHash = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      password: passwordHash
    });

    return user;
  }
}

export { CreateUserUseCase }