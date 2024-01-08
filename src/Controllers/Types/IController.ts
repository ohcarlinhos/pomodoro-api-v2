export interface IController {
    GetAll(): Promise<unknown[]>;
    Get(id: string): Promise<unknown| null>;
    Post(data: unknown): Promise<unknown>;
    Put(data: unknown): Promise<unknown>;
    Delete(id: string): Promise<void>;
}
