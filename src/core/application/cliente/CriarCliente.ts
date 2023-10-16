import { ClienteRepository } from "@/core/domain/cliente/ClienteRepository";

interface RegisterUseCaseParams {
	nome: string;
	sobrenome?: string;
	cpf: string;
}

export class CriarCliente {

	constructor(private clienteRepository: ClienteRepository) { }

	async criar({ nome, sobrenome, cpf }: RegisterUseCaseParams) {
		const clienteComMesmoCPF = await this.clienteRepository.findByCPF(cpf);
		if (clienteComMesmoCPF) {
			throw new Error("CPF já cadastrado");
		}

		await this.clienteRepository.save({
			nome,
			sobrenome,
			cpf
		});
	}
}
