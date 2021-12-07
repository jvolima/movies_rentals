import { Router } from "express";
import multer from "multer";
import uploadConfig from "../config/upload"
import { CreateMoviesController } from "../modules/movies/useCases/createMovies/CreateMoviesController";
import { ListMoviesController } from "../modules/movies/useCases/listMovies/ListMoviesController";
import { UploadMoviesImagesController } from "../modules/movies/useCases/uploadMoviesImages/UploadMoviesImagesController";
import { ensureAdmin } from "../shared/middlewares/ensureAdmin";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";

const moviesRoutes = Router();

const upload = multer(uploadConfig.upload("./tmp/movies"))

const createMoviesController = new CreateMoviesController();
const listMoviesController = new ListMoviesController();
const uploadMoviesImagesController = new UploadMoviesImagesController();

moviesRoutes.post("/", ensureAuthenticated, ensureAdmin, createMoviesController.handle);
moviesRoutes.get("/", listMoviesController.handle);
moviesRoutes.post("/images/:id", ensureAuthenticated, ensureAdmin, upload.array("images"), uploadMoviesImagesController.handle)

export { moviesRoutes }