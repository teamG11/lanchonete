
import express from "express";
import cors from "cors";

import { clienteRouter } from "./routes/clienteRouter";
import { produtoRouter } from "./routes/produtoRouter";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/cliente", clienteRouter);
app.use("/produto", produtoRouter);

export default app;
