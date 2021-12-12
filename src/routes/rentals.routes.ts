import { Router } from "express";
import { CreateRentalController } from "../modules/rentals/useCases/createRental/CreateRentalController";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";

const rentalsRoutes = Router();

const createRentalController = new CreateRentalController();

rentalsRoutes.post("/", ensureAuthenticated, createRentalController.handle);

export { rentalsRoutes }