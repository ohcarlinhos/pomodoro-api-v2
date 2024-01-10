export interface IDatabaseClient {
    Connect(): Promise<void>;
    End(): Promise<void>;
    OnlyQuery(queryString: string): Promise<unknown>;
    Query(queryString: string): Promise<unknown>;
}
