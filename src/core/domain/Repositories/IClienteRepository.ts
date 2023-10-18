import { Cliente } from "../Entities/Cliente";

export interface IClienteRepository {
	saveAsync(cliente: Cliente): Promise<void>;
	findByCPFAsync(cpf: string): Promise<Cliente | null>;
}
