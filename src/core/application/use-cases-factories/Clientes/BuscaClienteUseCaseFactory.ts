import ClienteRepository from "@/adapter/infrastructure/Repositories/ClienteRepository";
import { BuscaClienteUseCase } from "../../use-cases/clientes/BuscaClienteUseCase";

export function BuscaClienteUseCaseFactory() {
	const clienteRepository = new ClienteRepository();
	const buscaClienteUseCase = new BuscaClienteUseCase(clienteRepository);

	return buscaClienteUseCase;
}
