import ClienteRepository from "@/adapter/infrastructure/Repositories/ClienteRepository";
import { CriaCliente } from "../../use-cases/cliente/CriaCliente";

export function CriaClienteFactory() {
	const clienteRepository = new ClienteRepository();
	const criaCliente = new CriaCliente(clienteRepository);

	return criaCliente;
}
