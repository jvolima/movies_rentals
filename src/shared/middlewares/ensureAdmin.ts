import { Request, Response, NextFunction } from "express"
import { AppError } from "../../errors/AppError";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  const user_id = request.user.id;

  const usersRepository = new UsersRepository();

  const user = await usersRepository.findById(user_id)

  if(!user.isAdmin) {
    throw new AppError("User is not admin!", 401)
  }

  return next()
}