import ClienteRepository from "@/adapter/infrastructure/Repositories/ClienteRepository";
import { CriaClienteUseCase } from "../../use-cases/clientes/CriaClienteUseCase";

export function CriaClienteUseCaseFactory() {
	const clienteRepository = new ClienteRepository();
	const criaClienteUseCase = new CriaClienteUseCase(clienteRepository);

	return criaClienteUseCase;
}
