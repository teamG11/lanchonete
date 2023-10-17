import { Cliente } from "@/core/domain/cliente/Cliente";
import { ClienteRepository } from "@/core/domain/cliente/ClienteRepository";

interface ValidarClienteDados {
	cpf: string;
}

export class ValidarCliente {
	private clienteRepository: ClienteRepository;

	constructor(clienteRepository: ClienteRepository) {
		this.clienteRepository = clienteRepository;
	}

	async executar({ cpf }: ValidarClienteDados): Promise<Cliente> {
		const cliente = await this.clienteRepository.findByCPF(cpf);

		if (!cliente) {
			throw new Error("Cliente não encontrado");
		}

		return cliente;
	}
}
