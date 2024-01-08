import { PostgresDatabaseClient } from "./Postgres/PostgresDatabaseClient";
import { PostgresDatabaseConfig } from "./Postgres/PostgresDatabaseConfig";

export const DatabaseClient = new PostgresDatabaseClient(
    new PostgresDatabaseConfig()
);
