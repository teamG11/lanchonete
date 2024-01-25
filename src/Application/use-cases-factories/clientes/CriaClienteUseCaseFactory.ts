import { CriaClienteUseCase } from "../../use-cases/clientes/CriaClienteUseCase";
import { IClienteGateway } from "@/Interfaces/Gataways/ClienteGateway";

export function CriaClienteUseCaseFactory(clienteGateway: IClienteGateway) {
	const criaCliente = new CriaClienteUseCase(clienteGateway);
	return criaCliente;
}
