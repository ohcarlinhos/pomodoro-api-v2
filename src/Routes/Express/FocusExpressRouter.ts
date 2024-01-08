import { UsersController } from "../../Controllers/UsersController";
import { ExpressRouter } from "./Types/ExpressRouter";

export class FocusExpressRouter extends ExpressRouter {
    Main(): void {
        const usersController = new UsersController();

        this._router.get("/", (req, res) => {
            res.json([]);  
        });
    }
}
