import { Cliente } from "@/Domain/Entities/Cliente";
import { RegistroNaoEncontradoError } from "../../errors/RegistroNaoEncontradoError";
import { IClienteGateway } from "@/Interfaces/Gataways/ClienteGateway";

export interface BuscaClienteRequest {
	cpf: string;
}

export interface BuscaClienteResponse {
	cliente: Cliente;
}

export class BuscaClienteUseCase {

	constructor(private clienteGateway: IClienteGateway) { }

	async executarAsync({ cpf }: BuscaClienteRequest): Promise<BuscaClienteResponse> {
		const cliente = await this.clienteGateway.findByCPFAsync(cpf);

		if (!cliente) {
			throw new RegistroNaoEncontradoError();
		}

		return { cliente };
	}
}
