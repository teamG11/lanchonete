import { Cliente } from "@/core/domain/Entities/Cliente";
import { IClienteRepository } from "@/core/domain/Repositories/IClienteRepository";

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
			throw new Error("CPF já cadastrado");
		}

		sobrenome = sobrenome || null;

		const cliente = new Cliente({ nome, sobrenome, cpf });
		this.clienteRepository.saveAsync(cliente);
	}
}
