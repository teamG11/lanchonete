import { Router } from "express";
import { ClienteController } from "../controllers/ClienteController";

const clienteRouter = Router();

const clienteController = new ClienteController();

clienteRouter.post("/criar", clienteController.criar);
clienteRouter.get("/buscar/:cpf", clienteController.buscar);

export { clienteRouter };
