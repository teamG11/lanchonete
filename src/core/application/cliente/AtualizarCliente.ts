import { Cliente } from "@/core/domain/cliente/Cliente";
import { ClienteRepository } from "@/core/domain/cliente/ClienteRepository";

interface AtualizarClienteDados {
    nome : string | null;
    sobreNome : string | null;
    email : string | null;
    cpf : string | null;
    telefone : string | null;
}

export class AtualizarCliente {
    private clienteRepository : ClienteRepository;

    constructor(clienteRepository : ClienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    async executar(cliente: Cliente, dados : AtualizarClienteDados): Promise<Cliente> {
        const { nome, sobreNome, email, cpf, telefone } = dados;
        if (nome) {
            cliente.nome = nome;
        }
        if (sobreNome) {
            cliente.sobreNome = sobreNome;
        }
        if (email) {
            cliente.email = email;
        }
        if (cpf) {
            cliente.cpf = cpf;
        }
        if (telefone) {
            cliente.telefone = telefone;
        }
        cliente.updatedAt = new Date();
        await this.clienteRepository.update(cliente);
        return cliente;
    }
}