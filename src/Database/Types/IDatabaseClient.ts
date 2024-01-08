export interface IDatabaseClient {
    Connect(): Promise<void>;
    End(): Promise<void>;
    Query(queryString: string): Promise<unknown>;
}
