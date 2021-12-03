import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListGenresUseCase } from "./ListGenresUseCase";

class ListGenresController {
  async handle(request: Request, response: Response) {
    const listGenresUseCase = container.resolve(ListGenresUseCase);

    const genres = await listGenresUseCase.execute();

    return response.json(genres);
  }
}

export { ListGenresController }