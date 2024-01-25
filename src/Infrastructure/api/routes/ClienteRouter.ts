import { Router } from "express";
import { ClienteController } from "../../../Interfaces/controllers/ClienteController";
import ClienteRepository from "@/Infrastructure/drivers/Repositories/ClienteRepository";

const clienteRouter = Router();

const clienteController = new ClienteController(new ClienteRepository());

clienteRouter.post("", (req, res, next) => { clienteController.criar(req, res, next);});
clienteRouter.get('/:cpf', (req, res, next) => { clienteController.buscar(req, res, next);});

export { clienteRouter };
