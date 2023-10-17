import { Cliente as ClienteDomain } from "@/core/domain/cliente/Cliente";
import { ClienteRepository } from "@/core/domain/cliente/ClienteRepository";
import { prisma } from "@/lib/prisma";

export default class ImplClienteRepository implements ClienteRepository {
	async save(data: ClienteDomain): Promise<void> {
		const cliente = prisma.cliente.create({
			data
		});

		await cliente;
	}

	async findByCPF(cpf: string): Promise<ClienteDomain | null> {
		const cliente = prisma.cliente.findUnique({
			where: {
				cpf
			}
		});

		return cliente;
	}
}

