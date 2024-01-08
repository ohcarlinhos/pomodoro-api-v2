import "dotenv/config";

import { MigrationHandler } from "./Database/Migrations/MigrationHandler";
import { DatabaseClient } from "./Database";
import { MigrationQueries } from "./Database/Migrations";

async function UpMigrates() {
    await DatabaseClient.Connect();
    await new MigrationHandler(DatabaseClient, MigrationQueries).Up();
    await DatabaseClient.End();
}

UpMigrates();
