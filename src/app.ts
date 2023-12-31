
import express from "express";
import cors from "cors";

import { clienteRouter } from "./adapter/api/routes/ClienteRouter";
import { produtoRouter } from "./adapter/api/routes/ProdutoRouter";
import { pedidoRouter } from "./adapter/api/routes/PedidoRouter";

import { errorMiddleware } from "./adapter/api/middlewares/error";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/cliente", clienteRouter);
app.use("/produto", produtoRouter);
app.use("/pedido", pedidoRouter);

app.use(errorMiddleware);

export default app;
