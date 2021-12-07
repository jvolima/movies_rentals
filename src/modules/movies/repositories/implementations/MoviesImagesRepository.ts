import { MovieImage } from ".prisma/client";
import prismaClient from "../../../../prisma";
import { IMoviesImagesRepository } from "../IMoviesImagesRepository";


class MoviesImagesRepository implements IMoviesImagesRepository {
  async create(movie_id: string, image_name: string): Promise<MovieImage> {
    const movieImage = await prismaClient.movieImage.create({
      data: {
        movie_id,
        image_name
      }
    });

    return movieImage
  }
}

export { MoviesImagesRepository }