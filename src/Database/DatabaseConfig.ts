import { DatabaseConfigType } from "./DatabaseTypes";

export class DatabaseConfig {
    static Get(database: string): DatabaseConfigType {
        // TODO: passar para .env
        return {
            host: "localhost",
            port: 65432,
            database: database,
            user: "postgres",
            password: "1234",
        };
    }
}
