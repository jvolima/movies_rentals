import { User } from ".prisma/client";
import prismaClient from "../../../../prisma";
import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  async create({ name, email, password }: ICreateUsersDTO): Promise<User> {
    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password,
        isAdmin: false
      }
    });

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await prismaClient.user.findFirst({
      where: { email }
    });

    return user as User;
  }
}

export { UsersRepository }