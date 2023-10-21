import { describe, expect, it } from 'vitest';
import { CriaCliente } from './CriaCliente';
import { ClienteTestRepository } from '@/adapter/infrastructure/Repositories/TestsRepositories/ClienteTestRepository';
import { CPFCadastradoError } from '../../errors/CPFCadastradoError';

describe('CriaCliente use case', () => {
	it('Deve permitir cadastrar cliente', async () => {
		const useCase = new CriaCliente(new ClienteTestRepository());

		const cliente = {
			nome: 'John',
			cpf: '12345678901',
		};

		const { cliente: clienteResponse } = await useCase.executarAsync(cliente);

		expect(clienteResponse.nome).toBe(cliente.nome);
		expect(clienteResponse.sobrenome).toBe(null);
		expect(clienteResponse.cpf).toBe(cliente.cpf);
	})

	it('Não deve permitir CPF duplicado', async () => {
		const useCase = new CriaCliente(new ClienteTestRepository());

		const cliente = {
			nome: 'John',
			sobrenome: 'Doe',
			cpf: '12345678901',
		};

		await useCase.executarAsync(cliente);
		await expect(() => useCase.executarAsync(cliente)).rejects.toBeInstanceOf(CPFCadastradoError);
	})
})
