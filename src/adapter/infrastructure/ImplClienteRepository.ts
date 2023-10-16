import { ClienteRepository } from "@/core/domain/cliente/ClienteRepository";
import { prisma } from "@/lib/prisma";
import { Cliente, Prisma } from "@prisma/client";

export default class ImplClienteRepository implements ClienteRepository {
	async save(data: Prisma.ClienteCreateInput): Promise<Cliente> {
		const cliente = prisma.cliente.create({
			data: data
		});

		return cliente;
	}

	async findByCPF(cpf: string): Promise<Cliente | null> {
		const cliente = prisma.cliente.findUnique({
			where: {
				cpf
			}
		});

		return cliente;
	}
}

