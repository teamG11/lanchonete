import { Cliente } from "./Cliente";

export interface ClienteRepository {
	save(cliente: Cliente): Promise<void>;
	findByCPF(cpf: string): Promise<Cliente | null>;
}
