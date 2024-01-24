import { ClienteTestRepository } from '@/Infrastructure/drivers/Repositories/TestsRepositories/ClienteTestRepository';
import { RegistroDuplicadoError } from '@/Application/errors/RegistroDuplicadoError';
import { CriaClienteUseCase } from '@/Application/use-cases/clientes/CriaClienteUseCase';
import { beforeEach, describe, expect, it } from 'vitest';
import ClienteGateway from '@/Interfaces/Gataways/ClienteGateway';

let useCase: CriaClienteUseCase;
let clienteGateway: ClienteGateway;

describe('CriaCliente use case', () => {
	beforeEach(() => {
		var clienteRepository = new ClienteTestRepository();
		clienteGateway = new ClienteGateway(clienteRepository);
		useCase = new CriaClienteUseCase(clienteGateway);
	})

	it('Deve permitir cadastrar cliente', async () => {
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
		const cliente = {
			nome: 'John',
			sobrenome: 'Doe',
			cpf: '12345678901',
		};

		await useCase.executarAsync(cliente);
		await expect(() => useCase.executarAsync(cliente)).rejects.toBeInstanceOf(RegistroDuplicadoError);
	})
})
