import ClienteRepository from "@/adapter/infrastructure/Repositories/ClienteRepository";
import { BuscaClienteUseCase } from "../../../use-cases/clientes/BuscaClienteUseCase";

export function BuscaClienteFactory() {
	const clienteRepository = new ClienteRepository();
	const buscaCliente = new BuscaClienteUseCase(clienteRepository);
	
	return buscaCliente;
}
