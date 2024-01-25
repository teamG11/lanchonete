import { Cliente } from "../../Domain/Entities/Cliente";

export interface IClienteRepository {
	saveAsync(cliente: Cliente): Promise<Cliente>;
	findByCPFAsync(cpf: string): Promise<Cliente | null>;
}
