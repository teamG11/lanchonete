import { Cliente as ClienteDomain } from "@/core/domain/cliente/Cliente";
import { ClienteRepository } from "@/core/domain/cliente/ClienteRepository";
import { prisma } from "@/lib/prisma";
import { Cliente, Prisma } from "@prisma/client";

export default class ImplClienteRepository implements ClienteRepository {
	async save(data: ClienteDomain): Promise<void> {
		const cliente = prisma.cliente.create({
			data: translateClienteDomainToPrismaCliente(data)
		});

		await cliente;
	}

	async findByCPF(cpf: string): Promise<ClienteDomain | null> {
		const cliente = prisma.cliente.findUnique({
			where: {
				cpf
			}
		});

		const prismaCliente = await cliente;

		if (!prismaCliente) {
			return null;
		}

		return translatePrismaClienteToClienteDomain(prismaCliente);
	}
}

function translatePrismaClienteToClienteDomain(cliente: Cliente): ClienteDomain {
	return new ClienteDomain(cliente.nome, cliente.sobrenome, cliente.cpf);
}

function translateClienteDomainToPrismaCliente(cliente: ClienteDomain): Prisma.ClienteCreateInput {
	return {
		nome: cliente.nome,
		cpf: cliente.cpf
	};
}

