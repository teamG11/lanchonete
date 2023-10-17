import { Router } from "express";
import { ClienteController } from "../controllers/ClienteController";

const clienteRouter = Router();

const clienteController = new ClienteController();

clienteRouter.post("", clienteController.incluir);
clienteRouter.get("/validar/:cpf", clienteController.validar);

export { clienteRouter };
