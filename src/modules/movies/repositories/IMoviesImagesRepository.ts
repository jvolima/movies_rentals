import { MovieImage } from ".prisma/client";


interface IMoviesImagesRepository {
  create(movie_id: string, image_name: string): Promise<MovieImage>
}

export { IMoviesImagesRepository } 