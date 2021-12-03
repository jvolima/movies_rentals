import { Router } from "express";
import { CreateGenreController } from "../modules/genres/useCases/createGenre/CreateGenreController";
import { ListGenresController } from "../modules/genres/useCases/listGenres/ListGenresController";
import { ensureAdmin } from "../shared/middlewares/ensureAdmin";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";

const genreRoutes = Router();

const createGenreController = new CreateGenreController();
const listGenresController = new ListGenresController();

genreRoutes.post("/", ensureAuthenticated, ensureAdmin, createGenreController.handle);
genreRoutes.get("/", listGenresController.handle);

export { genreRoutes }