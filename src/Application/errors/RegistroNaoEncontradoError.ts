import { ApiError } from "./ApiError";

export class RegistroNaoEncontradoError extends ApiError {
	constructor() {
		super("Registro não encontrado.", 404);
	}
}
