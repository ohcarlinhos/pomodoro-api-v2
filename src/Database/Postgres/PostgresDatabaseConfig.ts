import { IDatabaseConfig } from "../Types/IDatabaseConfig";
import { PostgresDatabaseConfigType } from "./Types/PostgresDatabaseConfigType";

export class PostgresDatabaseConfig implements IDatabaseConfig {
    public Get(): PostgresDatabaseConfigType {
        const {
            PG_HOST = "localhost",
            PG_PORT = 5432,
            PG_DATABASE = "api",
            PG_USER = "postgres",
            PG_PASSWORD = "1234",
        } = process.env;

        return {
            host: PG_HOST,
            port: typeof PG_PORT === "string" ? parseInt(PG_PORT, 10) : PG_PORT,
            database: PG_DATABASE,
            user: PG_USER,
            password: PG_PASSWORD,
        };
    }
}
