import { Cliente, Prisma } from '@prisma/client';

export interface ClienteRepository {
	save(cliente: Prisma.ClienteCreateInput): Promise<Cliente>;
	findByCPF(cpf: string): Promise<Cliente | null>;
}
