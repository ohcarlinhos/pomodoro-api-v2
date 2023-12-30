import cors from "cors";
import { Express } from "express";
import { IServerConfig } from "./Types/IServerConfig";

export class ExpressCorsConfig implements IServerConfig {
    public Configure(app: Express) {
        app.use(cors());
    }
}
