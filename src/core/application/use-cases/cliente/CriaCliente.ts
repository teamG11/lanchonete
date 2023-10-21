import { Cliente } from "@/core/domain/Entities/Cliente";
import { IClienteRepository } from "@/core/domain/Repositories/IClienteRepository";
import { CPFCadastradoError } from "../../errors/CPFCadastradoError";

interface CriaClienteDados {
	nome: string;
	sobrenome?: string | null;
	cpf: string;
}

export class CriaCliente {

	constructor(private clienteRepository: IClienteRepository) { }

	async executarAsync({ nome, sobrenome, cpf }: CriaClienteDados) {
		const clienteComMesmoCPF = await this.clienteRepository.findByCPFAsync(cpf);
		if (clienteComMesmoCPF) {
			throw new CPFCadastradoError();
		}

		sobrenome = sobrenome || null;

		const cliente = new Cliente({ nome, sobrenome, cpf });
		this.clienteRepository.saveAsync(cliente);
	}
}
