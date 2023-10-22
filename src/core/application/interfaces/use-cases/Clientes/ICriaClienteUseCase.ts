export interface CriaClienteDados {
    nome: string;
    sobrenome?: string | null;
    cpf: string;
}

export interface ICriaClienteUseCase {
    executarAsync({ nome, sobrenome, cpf }: CriaClienteDados): Promise<void>
}