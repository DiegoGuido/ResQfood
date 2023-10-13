import { Router } from "express";
import { EstablishmentsController } from "../controllers/establishments.js";

export const establishmentsRouter = Router();

establishmentsRouter.get('/', EstablishmentsController.getAll);
establishmentsRouter.get('/busqueda', EstablishmentsController.getByName);
establishmentsRouter.post('/', EstablishmentsController.create);