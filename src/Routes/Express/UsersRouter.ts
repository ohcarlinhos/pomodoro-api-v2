import { UsersController } from "../../Controllers/UsersController";
import { ExpressRouter } from "./Types/ExpressRouter";

export class UsersRouter extends ExpressRouter {
    Main(): void {
        const usersController = new UsersController();

        this._router.get("/", (_, res) => {
            res.json(usersController.GetAll());
        });

        this._router.get("/:id/", (req, res) => {
            if (req.params.id) res.json(usersController.Get(req.params.id));
        });
    }
}
