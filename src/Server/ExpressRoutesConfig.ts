import { Express, Router } from "express";
import { IServerConfig } from "./Types/IServerConfig";

export class ExpressRoutesConfig implements IServerConfig {
    private _router: Router;

    constructor(router: Router) {
        this._router = router;
    }

    public Configure(app: Express) {
        app.use(this._router);
    }
}
