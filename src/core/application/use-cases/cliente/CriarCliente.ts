import { Cliente } from "@/core/domain/cliente/Cliente";
import { ClienteRepository } from "@/core/domain/cliente/ClienteRepository";
import { CPFCadastradoError } from "../../errors/CPFCadastradoError";

interface CriarClienteDados {
	nome: string;
	sobrenome?: string | null;
	cpf: string;
}

export class CriarCliente {

	constructor(private clienteRepository: ClienteRepository) { }

	async executar({ nome, sobrenome, cpf }: CriarClienteDados) {
		const clienteComMesmoCPF = await this.clienteRepository.findByCPF(cpf);
		if (clienteComMesmoCPF) {
			throw new CPFCadastradoError();
		}

		sobrenome = sobrenome || null;

		const cliente = new Cliente({ nome, sobrenome, cpf });
		this.clienteRepository.save(cliente);
	}
}
