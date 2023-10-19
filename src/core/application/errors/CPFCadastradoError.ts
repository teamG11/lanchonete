import { ApiError } from "./ApiError";

export class CPFCadastradoError extends ApiError {
	constructor() {
		super("CPF já cadastrado.", 409);
	}
}
