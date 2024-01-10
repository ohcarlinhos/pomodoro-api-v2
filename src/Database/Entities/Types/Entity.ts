import { PostgresDatabaseClient } from "../../Postgres/PostgresDatabaseClient";
import { PostgresDatabaseConfig } from "../../Postgres/PostgresDatabaseConfig";

export abstract class Entity {
    protected _tableName: string;
    protected _databaseClient: PostgresDatabaseClient;

    constructor(tableName: string) {
        this._tableName = tableName;
        this._databaseClient = new PostgresDatabaseClient(
            new PostgresDatabaseConfig()
        );
    }

    protected async _selectById(id: number, cols = ["*"]) {
        const result = await this._databaseClient.Query(`
            select
                    ${cols.join(", ")}
            from
                    ${this._tableName}
            where
                    id = ${id};
        `);

        return result.rows;
    }

    protected async _selectByUuid(uuid: string, cols = ["*"]) {
        const result = await this._databaseClient.Query(`
            select
                    ${cols.join(", ")}
            from
                    ${this._tableName}
            where
                    id = ${uuid};
        `);

        return result.rows;
    }
}
