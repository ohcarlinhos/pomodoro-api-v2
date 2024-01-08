import { Client } from "pg";

import { IDatabaseClient } from "../Types/IDatabaseClient";
import { PostgresDatabaseConfig } from "./PostgresDatabaseConfig";

export class PostgresDatabaseClient implements IDatabaseClient {
    private _client: Client;

    constructor(databaseConfig: PostgresDatabaseConfig) {
        this._client = new Client(databaseConfig.Get());
    }

    async Connect(): Promise<void> {
        await this._client.connect();
    }

    async End(): Promise<void> {
        await this._client.end();
    }

    async Query<T>(queryString: string): Promise<T> {
        return this._client.query(queryString) as T;
    }
}
