import { UsersController } from "../../Controllers/UsersController";
import { ExpressRouter } from "./Types/ExpressRouter";

export class UsersExpressRouter extends ExpressRouter {
    Main(): void {
        const controller = new UsersController();

        this._router.get("/", (_, res) => {
            res.json(controller.GetAll());
        });

        this._router.get("/:id/", async (req, res) => {
            const result = await controller.Get(parseInt(req.params.id));
            res.json(result);
        });

        this._router.post("/", async (req, res) => {
            const { name, email, password } = req.body;
            const result = await controller.Create({ name, email, password });
            res.send(result);
        });
    }
}
