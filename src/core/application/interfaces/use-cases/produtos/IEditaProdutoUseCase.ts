import { Produto } from "@/core/domain/Entities/Produto";

export interface CriaProdutoEdicaoRequest {
    nome: string;
    descricao: string;
    tipo: string;
    valor: number;
    disponivel: boolean;
}

export interface IEditaProdutoUseCase {
    executarAsync({ nome, descricao, tipo, valor, disponivel }: CriaProdutoEdicaoRequest): Promise<Produto>
}