import { Cliente } from './Cliente';

export interface ClienteRepository {
    save(cliente: Cliente): Promise<void>;
    update(cliente: Cliente): Promise<void>;
    findByCpf(cpf: string): Promise<Cliente>;
}