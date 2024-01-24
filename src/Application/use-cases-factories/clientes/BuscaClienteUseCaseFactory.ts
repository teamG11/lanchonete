import { BuscaClienteUseCase } from "../../use-cases/clientes/BuscaClienteUseCase";
import { IClienteGateway } from "@/Interfaces/Gataways/ClienteGateway";

export function BuscaClienteUseCaseFactory(clienteGateway: IClienteGateway) {
	const buscaCliente = new BuscaClienteUseCase(clienteGateway);

	return buscaCliente;
}
