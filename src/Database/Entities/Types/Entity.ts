import { IDatabaseClient } from "../../Types/IDatabaseClient";
import { DatabaseClient } from "../..";

export abstract class Entity {
    protected _databaseClient: IDatabaseClient;
    protected _tableName: string;

    constructor(tableName: string) {
        this._databaseClient = DatabaseClient;
        this._tableName = tableName;
    }

    async SelectById(
        id: string | number,
        options = {
            cols: ["*"],
        }
    ) {
        await this._databaseClient.Connect();
        await this._databaseClient.Query(`
select
        ${options.cols.join(", ")}
from
        ${this._tableName}
where
        id = ${id};
        `);

        await this._databaseClient.End();
    }
}
