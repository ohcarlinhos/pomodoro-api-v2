import { DatabaseClient } from "./Database/DatabaseClient";
import { DatabaseConfig } from "./Database/DatabaseConfig";

async function doMigrates() {
    const client = new DatabaseClient(DatabaseConfig.Get("test"));

    await client.Connect();

    const result = await client.Query(`SELECT NOW()`);

    console.log(result.rows[0]);
    await client.End();
}

doMigrates();
