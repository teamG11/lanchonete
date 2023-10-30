import { Router } from "express";
import { ProdutoController } from "../controllers/ProdutoController";

const produtoRouter = Router();

produtoRouter.post("/", new ProdutoController().criar);
produtoRouter.put("/:id", new ProdutoController().editar);
produtoRouter.delete("/:id", new ProdutoController().remover);

produtoRouter.get("", new ProdutoController().buscarTodos);
produtoRouter.get("/:id", new ProdutoController().buscarPorId);
produtoRouter.get("/categoria/:categoria", new ProdutoController().buscarPorCategoria);

export { produtoRouter };
