import { Router } from "express";

export abstract class ExpressRouter {
    protected _router: Router;
    private _name: string;

    constructor(name: string) {
        this._router = Router();
        this._name = name;
        this.Main();
    }

    abstract Main(): void;

    Router(): Router {
        return Router().use(this._name, this._router);
    }
}
