import { Cliente } from './Cliente';

export interface ClienteRepository {
    save(cliente: Cliente): Promise<Cliente>;
    update(cliente: Cliente): Promise<Cliente>;
    findById(id: string): Promise<Cliente>;
}