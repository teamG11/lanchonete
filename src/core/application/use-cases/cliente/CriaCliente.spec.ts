import { describe, expect, it } from 'vitest';
import { CriaCliente } from './CriaCliente';
import { ClienteTestRepository } from '@/adapter/infrastructure/Repositories/TestsRepositories/ClienteTestRepository';
import { CPFCadastradoError } from '../../errors/CPFCadastradoError';

describe('CriaCliente use case', () => {
	it('Deve permitir cadastrar cliente', async () => {
		const criaClienteUseCase = new CriaCliente(new ClienteTestRepository());

		const cliente = {
			nome: 'John',
			sobrenome: 'Doe',
			cpf: '12345678901',
		};

		const { cliente: clienteResponse } = await criaClienteUseCase.executarAsync(cliente);

		expect(clienteResponse.nome).toBe(cliente.nome);
	})

	it('Não deve permitir CPF duplicado', async () => {
		const criaClienteUseCase = new CriaCliente(new ClienteTestRepository());

		const cliente = {
			nome: 'John',
			sobrenome: 'Doe',
			cpf: '12345678901',
		};

		await criaClienteUseCase.executarAsync(cliente);

		expect(() => criaClienteUseCase.executarAsync(cliente)).rejects.toBeInstanceOf(CPFCadastradoError);
	})
})
