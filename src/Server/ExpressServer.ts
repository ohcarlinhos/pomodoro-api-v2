import express, { Express } from "express";

import { IServerConfig } from "./Types/IServerConfig";
import { IServer } from "./Types/IServer";

export class ExpressServer implements IServer<Express> {
    public App: Express;
    private _port: number;

    constructor(port: number) {
        this.App = express();
        this._port = port;
    }

    private _config() {
        this.App.use(express.json());
    }

    public Run() {
        this._config();

        this.App.listen(this._port, () => {
            console.log(`Server started on http://localhost:${this._port}`);
        });
    }

    public Add(serverConfig: IServerConfig): void {
        serverConfig.Configure(this.App);
    }
}
