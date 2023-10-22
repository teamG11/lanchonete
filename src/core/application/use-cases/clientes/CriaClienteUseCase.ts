import { Cliente } from "@/core/domain/Entities/Cliente";
import { IClienteRepository } from "@/core/domain/Repositories/IClienteRepository";
import { CPFCadastradoError } from "../../errors/CPFCadastradoError";
import { CriaClienteDados, ICriaClienteUseCase } from "../../interfaces/use-cases/Clientes/ICriaClienteUseCase";
import ClienteRepository from "@/adapter/infrastructure/Repositories/ClienteRepository";


export class CriaClienteUseCase implements ICriaClienteUseCase{
	private readonly clienteRepository: IClienteRepository

	constructor() {
		this.clienteRepository = new ClienteRepository();
	 }

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
