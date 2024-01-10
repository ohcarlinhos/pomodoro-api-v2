import { Client } from "pg";

import { IDatabaseClient } from "../Types/IDatabaseClient";
import { PostgresDatabaseConfig } from "./PostgresDatabaseConfig";
import { CustomDatabaseError } from "../../Shared/Errors/CustomDatabaseError";

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

    async OnlyQuery(queryString: string) {
        return this._client.query(queryString);
    }

    async Query(queryString: string) {
        try {
            await this.Connect();
            const result = await this._client.query(queryString);
            return result;
        } catch (err) {
            throw new CustomDatabaseError((err as Error).message);
        } finally {
            await this.End();
        }
    }
}
