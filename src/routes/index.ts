import { Router } from "express";
import { genreRoutes } from "./genres.routes";
import { userRoutes } from "./users.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/genres", genreRoutes);

export { routes }