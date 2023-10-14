import { randomUUID } from "crypto";

export class Cliente {
    id: string;
    nome: string;
    sobreNome: string;
    email: string;
    cpf: string;
    telefone: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(
        nome: string,
        sobreNome: string,
        email: string,
        cpf: string,
        telefone: string,
    ) {
        this.id = novoId();
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

}

function novoId() {
    return randomUUID();
}