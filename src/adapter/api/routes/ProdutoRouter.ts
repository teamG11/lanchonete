import { Router } from "express";
import { ProdutoController } from "../controllers/ProdutoController";

const produtoRouter = Router();

produtoRouter.get("/:idProduto", new ProdutoController().obterPorId);
produtoRouter.get("/", new ProdutoController().obterTodos);
produtoRouter.post("/", new ProdutoController().incluir);
produtoRouter.delete("/:idProduto", new ProdutoController().remove);

export { produtoRouter };
