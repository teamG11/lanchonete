import { Cliente } from "@/core/domain/cliente/Cliente";
import { ClienteRepository } from "@/core/domain/cliente/ClienteRepository";

interface BuscarClienteDados {
    cpf: string;
}

export class BuscarCliente {
    private clienteRepository: ClienteRepository;

    constructor(clienteRepository: ClienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    async executar(dados: BuscarClienteDados): Promise<Cliente> {
        const { cpf } = dados;

        const cliente = await this.clienteRepository.findByCPF(cpf);

        if (!cliente) {
            throw new Error("Cliente não encontrado");
        }

        return cliente;
    }
}