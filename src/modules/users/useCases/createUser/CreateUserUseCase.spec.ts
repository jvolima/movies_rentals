import { AppError } from "../../../../errors/AppError"
import { UsersRepositoryInMemory } from "../../repositories/implementations/UsersRepositoryInMemory"
import { CreateUserUseCase } from "./CreateUserUseCase"

let usersRepositoryInMemory: UsersRepositoryInMemory
let createUserUseCase: CreateUserUseCase

describe("Create user", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  })

  it("should be able to create an new user", async () => {
    const user = {
      name: "test",
      email: "test@example.com",
      password: "123"
    }

    const userCreated = await createUserUseCase.execute({
      name: user.name, 
      email: user.email,
      password: user.password
    });

    expect(userCreated).toHaveProperty("id");
  });

  it("should not be able to create an new user if email already exists", async () => {
    expect(async () => {
      const user = {
        name: "test",
        email: "test@example.com",
        password: "123"
      }
  
      await createUserUseCase.execute({
        name: user.name, 
        email: user.email,
        password: user.password
      });
  
      await createUserUseCase.execute({
        name: user.name, 
        email: user.email,
        password: user.password
      });
    }).rejects.toBeInstanceOf(AppError)
  })
})