import { Express, Router } from "express";
import { IServerConfig } from "./Types/IServerConfig";

export class ExpressRoutesConfig implements IServerConfig {
    private _routes: Router;

    constructor(routes: Router) {
        this._routes = routes;
    }

    public Configure(app: Express) {
        app.use(this._routes);
    }
}
