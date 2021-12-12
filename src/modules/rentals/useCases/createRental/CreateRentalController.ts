import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRentalUseCase } from "./CreateRentalUseCase";

class CreateRentalController {
  async handle(request: Request, response: Response) {
    const { movie_id, expected_return_date } = request.body;
    const { id } = request.user;

    const createRentalUseCase = container.resolve(CreateRentalUseCase)

    const rental = await createRentalUseCase.execute({
      user_id: id,
      movie_id, 
      expected_return_date
    });

    return response.status(201).json(rental);
  }
}

export { CreateRentalController }