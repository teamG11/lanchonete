export class ApiError extends Error {
	public readonly statusCode: number;

	constructor(message: string, code: number) {
		super(message);
		this.statusCode = code;
	}
}
