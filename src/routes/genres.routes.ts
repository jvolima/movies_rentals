import { Router } from "express";
import { CreateGenreController } from "../modules/genres/useCases/createGenre/CreateGenreController";
import { ensureAdmin } from "../shared/middlewares/ensureAdmin";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";

const genreRoutes = Router();

const createGenreController = new CreateGenreController();

genreRoutes.post("/", ensureAuthenticated, ensureAdmin, createGenreController.handle);

export { genreRoutes }