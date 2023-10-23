import ClienteRepository from "@/adapter/infrastructure/Repositories/ClienteRepository";
import { CriaClienteUseCase } from "../../use-cases/clientes/CriaClienteUseCase";

export function CriaClienteFactory() {
	const clienteRepository = new ClienteRepository();
	const criaCliente = new CriaClienteUseCase(clienteRepository);

	return criaCliente;
}
