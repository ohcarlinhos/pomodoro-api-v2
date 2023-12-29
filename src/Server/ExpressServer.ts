import cors from "cors";
import express, { Express, Router } from "express";
import { IServer } from "./IServer";
import swaggerUi from "swagger-ui-express";

export class ExpressServer implements IServer {
    public App: Express;
    private _port: number;
    private _router: Router;

    constructor(port: number, router: Router) {
        this.App = express();
        this._port = port;
        this._router = router;
    }

    private _config() {
        this.App.use(express.json());
        this.App.use(cors());
        this._configRoutes();
    }

    private _configRoutes() {
        this._configSwaggerRoutes();
        this.App.use(this._router);
    }

    private _configSwaggerRoutes() {
        this._router.use("/api-docs", swaggerUi.serve);
        this._router.get("/api-docs", swaggerUi.setup());
    }

    public Run() {
        this._config();

        this.App.listen(this._port, () => {
            console.log(`Server started on http://localhost:${this._port}`);
        });
    }
}
