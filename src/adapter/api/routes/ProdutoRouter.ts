import { Router } from "express";
import { ProdutoController } from "../controllers/ProdutoController";

const produtoRouter = Router();

produtoRouter.post("/", new ProdutoController().criar);
produtoRouter.put("/:id", new ProdutoController().editar);
produtoRouter.delete("/:id", new ProdutoController().remove);

produtoRouter.get("/", new ProdutoController().obterTodos);
produtoRouter.get("/:id", new ProdutoController().obterPorId);
produtoRouter.get("/categoria/:id", new ProdutoController().obterPorCategoria);

export { produtoRouter };
