import { Cliente } from "@/core/domain/Entities/Cliente";
import { IClienteRepository } from "@/core/domain/Repositories/IClienteRepository";
import { RegistroDuplicadoError } from "../../errors/RegistroDuplicadoError";

interface CriaClienteRequest {
	nome: string;
	sobrenome?: string | null;
	cpf: string;
}

interface CriaClienteResponse {
	cliente: Cliente;
}

export class CriaClienteUseCase {

	constructor(private clienteRepository: IClienteRepository) { }

	async executarAsync({ nome, sobrenome, cpf }: CriaClienteRequest): Promise<CriaClienteResponse> {
		const clienteComMesmoCPF = await this.clienteRepository.findByCPFAsync(cpf);
		if (clienteComMesmoCPF) {
			throw new RegistroDuplicadoError();
		}

		sobrenome = sobrenome || null;

		const cliente = await this.clienteRepository.saveAsync(new Cliente({ nome, sobrenome, cpf }));
		return { cliente };
	}
}
