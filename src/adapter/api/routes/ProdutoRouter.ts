import { Router } from "express";
import { ProdutoController } from "../controllers/ProdutoController";

const produtoRouter = Router();

const produtoController = new ProdutoController();

produtoRouter.get("/:idProduto", produtoController.obterPorId);
produtoRouter.get("/", produtoController.obterTodos);
produtoRouter.post("", produtoController.incluir);

export { produtoRouter };
