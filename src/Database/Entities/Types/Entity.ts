import { PostgresDatabaseClient } from "../../Postgres/PostgresDatabaseClient";
import { DatabaseClient } from "../..";

export abstract class Entity {
    protected _databaseClient: PostgresDatabaseClient;
    protected _tableName: string;

    constructor(tableName: string) {
        this._databaseClient = DatabaseClient;
        this._tableName = tableName;
    }

    protected async _selectById(id: number, cols = ["*"]) {
        try {
            await this._databaseClient.Connect();
            const result = await this._databaseClient.Query(`
                select
                        ${cols.join(", ")}
                from
                        ${this._tableName}
                where
                        id = ${id};
            `);
            return result.rows;
        } finally {
            await this._databaseClient.End();
        }
    }

    protected async _selectByUuid(uuid: string, cols = ["*"]) {
        try {
            await this._databaseClient.Connect();
            const result = await this._databaseClient.Query(`
                select
                        ${cols.join(", ")}
                from
                        ${this._tableName}
                where
                        id = ${uuid};
            `);
            return result.rows;
        } finally {
            await this._databaseClient.End();
        }
    }
}
