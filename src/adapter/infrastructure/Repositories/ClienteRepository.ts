import { Cliente as ClienteDomain } from "@/core/domain/Entities/Cliente";
import { IClienteRepository } from "@/core/domain/Repositories/IClienteRepository";
import { prisma } from "@/lib/prisma";

export default class ClienteRepository implements IClienteRepository {
	async saveAsync(data: ClienteDomain): Promise<void> {
		const cliente = prisma.cliente.create({
			data
		});

		await cliente;
	}

	async findByCPFAsync(cpf: string): Promise<ClienteDomain | null> {
		const cliente = prisma.cliente.findUnique({
			where: {
				cpf
			}
		});

		return cliente;
	}
}

