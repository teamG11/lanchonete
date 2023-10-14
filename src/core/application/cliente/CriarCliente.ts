import { Cliente } from "@/core/domain/cliente/Cliente";
import { ClienteRepository } from "@/core/domain/cliente/ClienteRepository";

interface CriarClienteDados {
    nome : string;
    sobreNome : string;
    email : string;
    cpf : string;
    telefone : string;
}

export class CriarCliente {
    private clienteRepository : ClienteRepository;

    constructor(clienteRepository : ClienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    async executar(dados : CriarClienteDados): Promise<Cliente> {
        const { nome, sobreNome, email, cpf, telefone } = dados;
        const cliente = new Cliente(nome, sobreNome, email, cpf, telefone);
        await this.clienteRepository.save(cliente);
        return cliente;
    }
}