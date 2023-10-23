import { Router } from "express";
import { ProdutoController } from "../controllers/ProdutoController";

const produtoRouter = Router();

produtoRouter.post("", new ProdutoController().incluir);
produtoRouter.delete("/:idProduto", new ProdutoController().remove);
produtoRouter.put("",new ProdutoController().editar);
produtoRouter.get("/:idProduto", new ProdutoController().obterPorId);
produtoRouter.get("/", new ProdutoController().obterTodos);
produtoRouter.get("/categoria/:descricaoCategoria", new ProdutoController().obterTodos);

export { produtoRouter };
