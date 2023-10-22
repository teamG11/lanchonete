import { Produto } from "@/core/domain/Entities/Produto";

export interface CriaProdutosRequest {
    nome: string;
    descricao: string;
    tipo: string;
    valor: number;
    disponivel: boolean;
}

export interface ICriaProdutoUseCase {
    executarAsync({ nome, descricao, tipo, valor, disponivel }: CriaProdutosRequest): Promise<Produto>
}