import { FocusController } from "../../Controllers/FocusController";
import { ExpressRouter } from "./Types/ExpressRouter";

export class FocusExpressRouter extends ExpressRouter {
    Main(): void {
        const controller = new FocusController();

        this._router.get("/", (req, res) => {
            res.json([]);
        });
    }
}
