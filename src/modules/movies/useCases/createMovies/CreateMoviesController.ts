import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMoviesUseCase } from "./CreateMoviesUseCase";

class CreateMoviesController {
  async handle(request: Request, response: Response) {
    const { name, description, daily_rate, fine_amount, genre_id } = request.body;

    const createMoviesUseCase = container.resolve(CreateMoviesUseCase);

    const movie = await createMoviesUseCase.execute({
      name,
      description,
      daily_rate,
      fine_amount,
      genre_id
    });

    return response.status(201).json(movie);
  }
}

export { CreateMoviesController }
