import { IMigrationQueries } from "./Queries/Types/IMigrationQueries";
import { IDatabaseClient } from "../Types/IDatabaseClient";
import { IMigration } from "./Types/IMigration";

import { Migration } from "./Migration";

export class MigrationHandler implements IMigration {
    private _migrations: IMigration[] = [];

    constructor(databaseClient: IDatabaseClient, queries: IMigrationQueries[]) {
        for (let i = 0; i < queries.length; i++) {
            this._migrations.push(new Migration(databaseClient, queries[i]));
        }
    }

    async Up(): Promise<void> {
        for (let i = 0; i < this._migrations.length; i++) {
            await this._migrations[i].Up();
        }
    }

    async Down(): Promise<void> {
        for (let i = 0; i < this._migrations.length; i++) {
            await this._migrations[this._migrations.length - i].Down();
        }
    }
}
