import { Cliente } from "@/Domain/Entities/Cliente";
import { IClienteRepository } from "@/Interfaces/Repositories/IClienteRepository";
import { prisma } from "@/Infrastructure/lib/prisma";

export default class ClienteRepository implements IClienteRepository {
	async saveAsync(data: Cliente): Promise<Cliente> {
		const cliente = prisma.cliente.create({
			data
		});

		return cliente;
	}

	async findByCPFAsync(cpf: string): Promise<Cliente | null> {
		const cliente = prisma.cliente.findUnique({
			where: {
				cpf
			}
		});

		return cliente;
	}
}
