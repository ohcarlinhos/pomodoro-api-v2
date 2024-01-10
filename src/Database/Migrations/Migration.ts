import { IDatabaseClient } from "../Types/IDatabaseClient";
import { IMigrationQueries } from "./Queries/Types/IMigrationQueries";
import { IMigration } from "./Types/IMigration";

export class Migration implements IMigration {
    private _databaseClient: IDatabaseClient;
    private _queries: IMigrationQueries;

    constructor(databaseClient: IDatabaseClient, queries: IMigrationQueries) {
        this._databaseClient = databaseClient;
        this._queries = queries;
    }

    async Up(): Promise<void> {
        await this._databaseClient.OnlyQuery(this._queries.UpQuery);
    }

    async Down(): Promise<void> {
        await this._databaseClient.OnlyQuery(this._queries.DownQuery);
    }
}
