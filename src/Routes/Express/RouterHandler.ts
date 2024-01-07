import { Router } from "express";

export class RouterHandler {
    private _routers: Router[];
    private _name: string;

    constructor(name: string = "") {
        this._routers = [];
        this._name = name;
    }

    Add(route: Router) {
        this._routers.push(route);
    }

    Router() {
        const router = Router();

        for (let i = 0; i < this._routers.length; i++)
            router.use(this._routers[i]);

        return Router().use(this._name, router);
    }
}
