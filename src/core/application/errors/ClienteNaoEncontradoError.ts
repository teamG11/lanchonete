import { ApiError } from "./ApiError";

export class ClienteNaoEncontradoError extends ApiError {
	constructor() {
		super("Cliente não encontrado.", 404);
	}
}
