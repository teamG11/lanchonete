import { Cliente } from "@/core/domain/Entities/Cliente";
import { IClienteRepository } from "@/core/domain/Repositories/IClienteRepository";
import { ClienteNaoEncontradoError } from "../../errors/ClienteNaoEncontradoError";
import { BuscaClienteDados, IBuscaClienteUseCase } from "../../interfaces/use-cases/Clientes/IBuscaClienteUseCase";
import ClienteRepository from "@/adapter/infrastructure/Repositories/ClienteRepository";

export class BuscaClienteUseCase implements IBuscaClienteUseCase {
	private readonly clienteRepository: IClienteRepository;

	constructor() {
		this.clienteRepository = new ClienteRepository();
	}

	async executarAsync({ cpf }: BuscaClienteDados): Promise<Cliente> {
		const cliente = await this.clienteRepository.findByCPFAsync(cpf);

		if (!cliente) {
			throw new ClienteNaoEncontradoError();
		}

		return cliente;
	}
}
