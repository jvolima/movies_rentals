import { User } from "@prisma/client";
import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../IUsersRepository";
import { v4 as uuidv4  } from "uuid"

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({ name, email, password }: ICreateUsersDTO): Promise<User> {
    const user = {
      id: uuidv4(),
      name,
      email,
      password,
      isAdmin: false,
      created_at: new Date(),
    }

    this.users.push(user);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);

    return user as User;
  }

  async findById(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id);

    return user as User;
  }
}

export { UsersRepositoryInMemory }