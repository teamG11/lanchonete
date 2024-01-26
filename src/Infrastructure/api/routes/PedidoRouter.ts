import { Router } from "express";
import { PedidoController } from "../../../Interfaces/controllers/PedidoController";
import PedidoRepository from "@/Infrastructure/drivers/Repositories/PedidoRepository";
import ProdutoRepository from "@/Infrastructure/drivers/Repositories/ProdutoRepository";

const pedidoRouter = Router();

const pedidoController = new PedidoController(new PedidoRepository(), new ProdutoRepository());

pedidoRouter.post("", (req, res, next) => { pedidoController.criar(req, res, next); });
pedidoRouter.post("/item", (req, res, next) => { pedidoController.adicionarItem(req, res, next); });
pedidoRouter.get("/:pedidoId", (req, res, next) => { pedidoController.buscarPorId(req, res, next); });
pedidoRouter.put("/:pedidoId", (req, res, next) => { pedidoController.atualizar(req, res, next); });
pedidoRouter.put("/:pedidoId/status", (req, res, next) => { pedidoController.atualizarStatusPedido(req, res, next); });
pedidoRouter.get("/:pedidoId/status-pagamento", (req, res, next) => { pedidoController.buscarStatusPagamento(req, res, next); });
pedidoRouter.get("/status/nao-finalizados", (req, res, next) => { pedidoController.buscarTodosPedidosNaoFinalizados(req, res, next); });

export { pedidoRouter };
