import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken";
import { AppError } from "../../errors/AppError";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    throw new AppError("Token is missing!", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, "9b1097c79eee5f2f73e5ec05861be827") as IPayload

    const usersRepository = new UsersRepository();
  
    const user = await usersRepository.findById(user_id);
  
    if(!user) {
      throw new AppError("User does not exists!", 401);
    }
  
    request.user = {
      id: user_id
    }
  
    next();
  } catch (err) {
    throw new AppError("Invalid token!", 401)
  }
  
}