import { ProdutoTestRepository } from '@/adapter/infrastructure/Repositories/TestsRepositories/ProdutoTestRepository';
import { RegistroDuplicadoError } from '@/core//application/errors/RegistroDuplicadoError';
import { CriaProdutoUseCase } from '@/core/application/use-cases/produtos/CriaProdutoUseCase';
import { Produto } from '@/core/domain/Entities/Produto';
import { TipoProduto } from '@/core/domain/Enums/TipoProduto';
import { beforeEach, describe, expect, it } from 'vitest';

let produtoRepository: ProdutoTestRepository;
let useCase: CriaProdutoUseCase;

describe('CriaProduto use case', () => {
	beforeEach(() => {
		produtoRepository = new ProdutoTestRepository();
		useCase = new CriaProdutoUseCase(produtoRepository);
	})

	it('Deve permitir cadastrar produto', async () => {
		const produto: Produto = {
			nome: 'Produto 1',
			descricao: 'Descrição do produto 1',
			tipo: TipoProduto.lanche.toString(),
			disponivel: true,
			valor: 1099,
		};

		const { produto: produtoResponse } = await useCase.executarAsync(produto);

		expect(produtoResponse.nome).toBe(produto.nome);
		expect(produtoResponse.descricao).toBe(produto.descricao);
		expect(produtoResponse.tipo).toBe(produto.tipo);
		expect(produtoResponse.disponivel).toBe(produto.disponivel);
		expect(produtoResponse.valor).toBe(produto.valor);
	})

	it('Não deve permitir nome produto duplicado', async () => {
		const produto: Produto = {
			nome: 'Produto 1',
			descricao: 'Descrição do produto 1',
			tipo: TipoProduto.lanche.toString(),
			disponivel: true,
			valor: 1099,
		};

		await useCase.executarAsync(produto);
		await expect(() => useCase.executarAsync(produto)).rejects.toBeInstanceOf(RegistroDuplicadoError);
	})
})
