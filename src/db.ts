import 'dotenv/config'

import { DatabasePgClient } from "./Database/DatabasePgClient";
import { DatabasePgConfig } from "./Database/DatabasePgConfig";
import { MigrationHandle } from "./Database/Migrations/MigrationHandle";

import { UserMigrationQueries } from "./Database/Migrations/Queries/UserMigrationQueries";

const migrationQueries = [new UserMigrationQueries()];

async function doMigrates() {
    const databaseConfig = new DatabasePgConfig();
    const databaseClient = new DatabasePgClient(databaseConfig.Get());

    await databaseClient.Connect();

    const migrationHandle = new MigrationHandle(
        databaseClient,
        migrationQueries,
    );
    await migrationHandle.Up();

    await databaseClient.End();
}

doMigrates();
