import { Router } from "express";
import { PedidoController } from "../controllers/PedidoController";

const pedidoRouter = Router();

const pedidoController = new PedidoController();

pedidoRouter.post("", pedidoController.criarPedido);
pedidoRouter.get("/validar/:pedidoId", pedidoController.validarPedido);

export { pedidoRouter };