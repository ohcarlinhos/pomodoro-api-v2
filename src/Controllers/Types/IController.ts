export interface IController {
    GetAll(): Promise<unknown[]>;
    Get(id: unknown): Promise<unknown| null>;
    Create(data: unknown): Promise<unknown>;
    Update(data: unknown): Promise<unknown>;
    Delete(id: unknown): Promise<void>;
}
