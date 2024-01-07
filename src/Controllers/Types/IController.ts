export interface IController {
    GetAll(): unknown[];
    Get(id: string): unknown | null;
    Post(data: unknown): void;
    Put(data: unknown): void;
    Delete(id: string): void;
}
