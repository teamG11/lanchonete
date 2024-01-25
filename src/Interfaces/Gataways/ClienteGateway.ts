import { Cliente } from "@/Domain/Entities/Cliente";
import { IClienteRepository } from "../Repositories/IClienteRepository";

export interface IClienteGateway {
    saveAsync(cliente: Cliente): Promise<Cliente>;
    findByCPFAsync(cpf: string): Promise<Cliente | null>;
}

export default class ClienteGateway implements IClienteGateway {

    constructor(private clienteRepository: IClienteRepository) { }
    
    async saveAsync(data: Cliente): Promise<Cliente> {

        return this.clienteRepository.saveAsync(data);
    }

    async findByCPFAsync(cpf: string): Promise<Cliente | null> {
        return this.clienteRepository.findByCPFAsync(cpf);
    }
}
