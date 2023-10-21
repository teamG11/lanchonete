import { Cliente } from "@/core/domain/Entities/Cliente";
import { IClienteRepository } from "@/core/domain/Repositories/IClienteRepository";
import { CPFCadastradoError } from "../../errors/CPFCadastradoError";

interface CriaClienteRequest {
	nome: string;
	sobrenome?: string | null;
	cpf: string;
}

interface CriaClienteResponse {
	cliente: Cliente
}

export class CriaCliente {

	constructor(private clienteRepository: IClienteRepository) { }

	async executarAsync({ nome, sobrenome, cpf }: CriaClienteRequest): Promise<CriaClienteResponse> {
		const clienteComMesmoCPF = await this.clienteRepository.findByCPFAsync(cpf);
		if (clienteComMesmoCPF) {
			throw new CPFCadastradoError();
		}

		sobrenome = sobrenome || null;

		const cliente = new Cliente({ nome, sobrenome, cpf });
		this.clienteRepository.saveAsync(cliente);

		return { cliente };
	}
}
