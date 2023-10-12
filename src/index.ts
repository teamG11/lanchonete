
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

import { clienteRouter } from "./routes/clienteRouter";
import { produtoRouter } from "./routes/produtoRouter";

dotenv.config();

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/cliente", clienteRouter);
app.use("/produto", produtoRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
