import { AppError } from "./AppError";

export class CustomDatabaseError extends AppError {
    constructor(message = "", statusCode: number = 400) {
        super("database_error", message, statusCode);
    }
}
