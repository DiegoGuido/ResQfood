import { Router } from "express";
import { adsController } from "../controllers/ads.js";

export const adsRouter = Router();

adsRouter.get('/', adsController.getAll);
adsRouter.get('/busqueda', adsController.getByEstablishment);
adsRouter.post('/', adsController.create);
adsRouter.delete('/:id', adsController.delete);
adsRouter.put('/', adsController.update);