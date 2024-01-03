import { Client } from "pg";
import { DatabaseConfigType } from "./DatabaseTypes";

export class DatabaseClient {
    private _client: Client;

    constructor(config: DatabaseConfigType) {
        this._client = new Client(config);
    }

    async Connect(): Promise<void> {
        await this._client.connect();
    }

    async End(): Promise<void> {
        await this._client.end();
    }

    async Query(queryString: string) {
        return this._client.query(queryString);
    }
}
