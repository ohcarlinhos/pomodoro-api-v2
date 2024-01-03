import { Connection } from "pg";

export class DatabaseConnection {
    private _connection: Connection;

    constructor() {
        if (!global._dbPgConnection) global._dbPgConnection = new Connection();
        this._connection = global._dbPgConnection;
    }

    query(text: string) {
        return this._connection.query(text);
    }
}
