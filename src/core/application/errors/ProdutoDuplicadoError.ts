import { ApiError } from "./ApiError";

export class ProdutoDuplicadoError extends ApiError {
	constructor() {
		super("Produto já cadastrado com esse nome.", 409);
	}
}
