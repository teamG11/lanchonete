import { Cliente } from "@/core/domain/Entities/Cliente";

export interface BuscaClienteDados {
    cpf: string;
}

export interface IBuscaClienteUseCase {
    executarAsync({ cpf }: BuscaClienteDados): Promise<Cliente>
}