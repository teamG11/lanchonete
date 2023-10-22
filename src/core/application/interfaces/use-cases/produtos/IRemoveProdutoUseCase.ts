export interface IRemoveProdutoUseCase {
    executarAsync(id: number): Promise<void>
}