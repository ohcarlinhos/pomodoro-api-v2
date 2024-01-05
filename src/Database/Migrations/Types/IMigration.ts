export interface IMigration {
    Up(): Promise<void>;
    Down(): Promise<void>;
}
