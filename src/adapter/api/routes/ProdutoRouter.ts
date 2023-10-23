import { Router } from "express";
import { ProdutoController } from "../controllers/ProdutoController";

const produtoRouter = Router();

produtoRouter.post("/", new ProdutoController().incluir);
produtoRouter.put("/", new ProdutoController().editar);
produtoRouter.delete("/:idProduto", new ProdutoController().remove);

produtoRouter.get("/", new ProdutoController().obterTodos);
produtoRouter.get("/:idProduto", new ProdutoController().obterPorId);
produtoRouter.get("/categoria/:descricaoCategoria", new ProdutoController().obterTodos);

export { produtoRouter };
