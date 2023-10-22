import ClienteRepository from "@/adapter/infrastructure/Repositories/ClienteRepository";
import { ICriaClienteUseCase } from "../../../interfaces/use-cases/clientes/ICriaClienteUseCase";
import { CriaClienteUseCase } from "../../../use-cases/clientes/CriaClienteUseCase";

export function CriaClienteFactory() : ICriaClienteUseCase {
	const clienteRepository = new ClienteRepository();
	const criaCliente = new CriaClienteUseCase(clienteRepository);

	return criaCliente;
}
