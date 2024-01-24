
import express from "express";
import cors from "cors";

import { clienteRouter } from "./Infrastructure/api/routes/ClienteRouter";
import { produtoRouter } from "./Infrastructure/api/routes/ProdutoRouter";
import { pedidoRouter } from "./Infrastructure/api/routes/PedidoRouter";

import { errorMiddleware } from "./Infrastructure/api/middlewares/error";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/cliente", clienteRouter);
app.use("/produto", produtoRouter);
app.use("/pedido", pedidoRouter);

app.use(errorMiddleware);

export default app;
