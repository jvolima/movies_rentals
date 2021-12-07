import { Request, Response } from "express"
import { container } from "tsyringe";
import { UploadMoviesImagesUseCase } from "./UploadMoviesImagesUseCase";

interface IFiles {
  filename: string
}

class UploadMoviesImagesController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const images = request.files as IFiles[];

    const images_name = images.map((file) => file.filename);

    const uploadMoviesImagesUseCase = container.resolve(UploadMoviesImagesUseCase);

    await uploadMoviesImagesUseCase.execute(id, images_name);

    return response.status(201).send()
  }
}

export { UploadMoviesImagesController }