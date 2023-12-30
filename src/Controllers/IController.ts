export interface IController {
    getAll<T>(): T[];
    get<T>(): T | null;
    post<T>(data: T): void;
    put<T>(data: T): void;
    delete<T>(id: T): void;
}
