export interface IDatabaseClient {
    Connect(): Promise<void>;
    End(): Promise<void>;
    Query<T>(queryString: string): Promise<T>;
}
