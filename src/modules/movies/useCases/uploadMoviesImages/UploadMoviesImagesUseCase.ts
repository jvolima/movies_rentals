import { inject, injectable } from "tsyringe";
import { IMoviesImagesRepository } from "../../repositories/IMoviesImagesRepository";

@injectable()
class UploadMoviesImagesUseCase {
  constructor (
    @inject("MoviesImagesRepository")
    private moviesImagesRepository: IMoviesImagesRepository
  ) {}

  async execute(movie_id: string, images_name: string[]) {
    images_name.map(async (image) => {
      await this.moviesImagesRepository.create(movie_id, image)
    });
  }
}

export { UploadMoviesImagesUseCase }