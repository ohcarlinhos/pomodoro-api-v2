import { Connection } from "pg";

declare global {
    var _dbPgConnection: Connection;
}
