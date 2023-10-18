import { Cliente } from "@/core/domain/Entities/Cliente";
import { IClienteRepository } from "@/core/domain/Repositories/IClienteRepository";

interface BuscaClienteDados {
	cpf: string;
}

export class BuscaCliente {
	private clienteRepository: IClienteRepository;

	constructor(clienteRepository: IClienteRepository) {
		this.clienteRepository = clienteRepository;
	}

	async executarAsync({ cpf }: BuscaClienteDados): Promise<Cliente> {
		const cliente = await this.clienteRepository.findByCPFAsync(cpf);

		if (!cliente) {
			throw new Error("Cliente não encontrado");
		}

		return cliente;
	}
}
