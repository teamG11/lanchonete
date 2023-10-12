import { Router } from "express";
import { ClienteController } from "../controllers/ClienteController";

const clienteRouter = Router();

const clienteController = new ClienteController();

clienteRouter.get("/:idCliente", clienteController.obterPorId);
clienteRouter.get("/", clienteController.obterTodos);
clienteRouter.post("", clienteController.incluir);

export { clienteRouter };
