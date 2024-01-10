export class AppError extends Error {
    public name: string;
    public message: string;
    public statusCode: number;

    constructor(name: string, message: string = "", statusCode: number = 400) {
        super();
        this.name = name;
        this.message = message;
        this.statusCode = statusCode;
    }
}
