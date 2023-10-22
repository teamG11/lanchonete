import { Cliente } from "@/core/domain/Entities/Cliente";
import { IClienteRepository } from "@/core/domain/Repositories/IClienteRepository";
import { BuscaClienteDados, IBuscaClienteUseCase } from "../../interfaces/use-cases/Clientes/IBuscaClienteUseCase";
import ClienteRepository from "@/adapter/infrastructure/Repositories/ClienteRepository";
import { RegistroNaoEncontradoError } from "../../errors/RegistroNaoEncontradoError";

export class BuscaClienteUseCase implements IBuscaClienteUseCase {

	constructor(private clienteRepository: IClienteRepository) {
		this.clienteRepository = new ClienteRepository();
	}

	async executarAsync({ cpf }: BuscaClienteDados): Promise<Cliente> {
		const cliente = await this.clienteRepository.findByCPFAsync(cpf);

		if (!cliente) {
			throw new RegistroNaoEncontradoError();
		}

		return cliente;
	}
}
