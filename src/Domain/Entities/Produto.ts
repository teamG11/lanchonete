export class Produto {
    id?: number;
    nome: string;
    descricao: string;
    categoria: string;
    valor: number;
    disponivel: boolean;

    constructor({ nome, descricao, categoria, valor, disponivel }: typeof Produto.prototype){
        this.nome = nome,
        this.descricao = descricao,
        this.categoria = categoria,
        this.valor = valor,
        this.disponivel = disponivel
    }
}
