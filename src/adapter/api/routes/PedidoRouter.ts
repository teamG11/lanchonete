import { Router } from "express";
import { PedidoController } from "../controllers/PedidoController";

const pedidoRouter = Router();

const pedidoController = new PedidoController();

pedidoRouter.post("", pedidoController.criar);
pedidoRouter.post("/item", pedidoController.adicionarItem);
pedidoRouter.get("/:pedidoId", pedidoController.buscarPorId);
pedidoRouter.put("/:pedidoId", pedidoController.atualizar);
pedidoRouter.get("/:pedidoId/status-pagamento", pedidoController.buscarStatusPagamento)
pedidoRouter.get("/status/nao-finalizados", pedidoController.buscarTodosPedidosNaoFinalizados)

export { pedidoRouter };
