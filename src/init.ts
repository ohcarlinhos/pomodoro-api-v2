import { Router } from "express";

import { ExpressServer } from "./Server/ExpressServer";
import { ExpressCorsConfig } from "./Server/ExpressCorsConfig";
import { ExpressRoutesConfig } from "./Server/ExpressRoutesConfig";

const router = Router();

router.get("/", (_, res) => {
    return res.json({ message: "Hello World" });
});

const App = new ExpressServer(3000);

App.Add(new ExpressCorsConfig());
App.Add(new ExpressRoutesConfig(router));

App.Run();
