import ClienteRepository from "@/adapter/infrastructure/Repositories/ClienteRepository";
import { BuscaCliente } from "../../use-cases/cliente/BuscaCliente";

export function BuscaClienteFactory() {
	const clienteRepository = new ClienteRepository();
	const buscaCliente = new BuscaCliente(clienteRepository);

	return buscaCliente;
}
