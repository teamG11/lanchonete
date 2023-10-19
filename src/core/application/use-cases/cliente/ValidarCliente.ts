import { Cliente } from "@/core/domain/cliente/Cliente";
import { ClienteRepository } from "@/core/domain/cliente/ClienteRepository";
import { ClienteNaoEncontradoError } from "../../errors/ClienteNaoEncontradoError";

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
			throw new ClienteNaoEncontradoError();
		}

		return cliente;
	}
}
