import { TipoProduto } from "../Enums/TipoProduto";

export class Produto {
    id?: number;
    nome: string;
    descricao: string;
    tipo: string;
    valor: number;
    disponivel: boolean;

    constructor({ nome, descricao, tipo, valor, disponivel}: typeof Produto.prototype){
        this.nome = nome,
        this.descricao = descricao,
        this.tipo = tipo,
        this.valor = valor,
        this.disponivel = disponivel
    }
}