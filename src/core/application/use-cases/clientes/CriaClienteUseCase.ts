import { Cliente } from "@/core/domain/Entities/Cliente";
import { IClienteRepository } from "@/core/domain/Repositories/IClienteRepository";
import { CriaClienteDados, ICriaClienteUseCase } from "../../interfaces/use-cases/Clientes/ICriaClienteUseCase";
import { RegistroDuplicadoError } from "../../errors/RegistroDuplicadoError";

export class CriaClienteUseCase implements ICriaClienteUseCase{

	constructor(private clienteRepository: IClienteRepository) {
		this.clienteRepository = clienteRepository;
	 }

	async executarAsync({ nome, sobrenome, cpf }: CriaClienteDados) {
		const clienteComMesmoCPF = await this.clienteRepository.findByCPFAsync(cpf);
		if (clienteComMesmoCPF) {
			throw new RegistroDuplicadoError();
		}

		sobrenome = sobrenome || null;

		const cliente = new Cliente({ nome, sobrenome, cpf });
		this.clienteRepository.saveAsync(cliente);
	}
}
