import { ApiError } from "./ApiError";

export class RegistroDuplicadoError extends ApiError {
	constructor() {
		super("Registro já cadastrado", 409);
	}
}
