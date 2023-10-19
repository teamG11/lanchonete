import { TipoProduto } from "../Enums/TipoProduto";

export class Produto {
    id?: number;
    nome: string;
    descricao: string;
    tipo: string;
    valor: number;
    disponivel: boolean;
    created_at: Date;
    updated_at: Date;

    constructor({ nome, descricao, tipo, valor, disponivel, created_at, updated_at}: typeof Produto.prototype){
        this.nome = nome,
        this.descricao = descricao,
        this.tipo = tipo,
        this.valor = valor,
        this.disponivel = disponivel,
        this.created_at = created_at,
        this.updated_at = updated_at
    }
}