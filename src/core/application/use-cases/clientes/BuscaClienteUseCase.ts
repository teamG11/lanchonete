import { Cliente } from "@/core/domain/Entities/Cliente";
import { IClienteRepository } from "@/core/domain/Repositories/IClienteRepository";
import { RegistroNaoEncontradoError } from "../../errors/RegistroNaoEncontradoError";

interface BuscaClienteRequest {
	cpf: string;
}

interface BuscaClienteResponse {
	cliente: Cliente;
}


export class BuscaClienteUseCase {

	constructor(private clienteRepository: IClienteRepository) {}

	async executarAsync({ cpf }: BuscaClienteRequest): Promise<BuscaClienteResponse> {
		const cliente = await this.clienteRepository.findByCPFAsync(cpf);

		if (!cliente) {
			throw new RegistroNaoEncontradoError();
		}

		return { cliente };
	}
}
