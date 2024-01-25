import { Cliente } from "@/Domain/Entities/Cliente";
import { IClienteRepository } from "@/Interfaces/Repositories/IClienteRepository";
import { RegistroDuplicadoError } from "../../errors/RegistroDuplicadoError";
import { IClienteGateway } from "@/Interfaces/Gataways/ClienteGateway";

interface CriaClienteRequest {
	nome: string;
	sobrenome?: string | null;
	cpf: string;
}

interface CriaClienteResponse {
	cliente: Cliente;
}

export class CriaClienteUseCase {

	constructor(private clienteGateway: IClienteGateway) { }

	async executarAsync({ nome, sobrenome, cpf }: CriaClienteRequest): Promise<CriaClienteResponse> {
		const clienteComMesmoCPF = await this.clienteGateway.findByCPFAsync(cpf);
		if (clienteComMesmoCPF) {
			throw new RegistroDuplicadoError();
		}

		sobrenome = sobrenome || null;

		const cliente = await this.clienteGateway.saveAsync(new Cliente({ nome, sobrenome, cpf }));
		return { cliente };
	}
}
