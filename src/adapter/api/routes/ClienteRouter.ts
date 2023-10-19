import { Router } from "express";
import { ClienteController } from "../controllers/ClienteController";

const clienteRouter = Router();

clienteRouter.post("", new ClienteController().incluir);
clienteRouter.get("/validar/:cpf", new ClienteController().validar);

export { clienteRouter };
