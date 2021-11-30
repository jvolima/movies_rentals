import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IResponse {
  user: {
    name: string;
    email: string;
  },
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(email: string, password: string) {
    const user = await this.usersRepository.findByEmail(email);

    if(!user) {
      throw new AppError("Email or password is incorrect!");
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new AppError("Email or password is incorrect!");
    }

    const token = sign({}, "9b1097c79eee5f2f73e5ec05861be827", {
      subject: user.id,
      expiresIn: "1d"
    });

    const tokenResponse: IResponse = {
      user: {
        name: user.name,
        email
      },
      token
    }

    return tokenResponse;
  }
}

export { AuthenticateUserUseCase }