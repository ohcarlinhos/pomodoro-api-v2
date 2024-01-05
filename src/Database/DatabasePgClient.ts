import { Client } from "pg";

import { IDatabaseClient } from "./Types/IDatabaseClient";
import { DatabasePgConfigType } from "./Types/DatabasePgConfigType";

export class DatabasePgClient implements IDatabaseClient {
    private _client: Client;

    constructor(config: DatabasePgConfigType) {
        this._client = new Client(config);
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
