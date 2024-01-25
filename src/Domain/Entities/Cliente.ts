export class Cliente {
	id?: number;
	nome: string;
	sobrenome: string | null;
	cpf: string;

	constructor({ cpf, nome, sobrenome }: typeof Cliente.prototype) {
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.cpf = cpf;
	}
}
