import cors from "cors";
import { Express, Request, Response, NextFunction } from "express";
import { IServerConfig } from "./Types/IServerConfig";

import { AppError } from "../Shared/Errors/AppError";

export class ExpressErrorHandlerConfig implements IServerConfig {
    public Configure(app: Express) {
        app.use((e: Error, _: Request, res: Response, __: NextFunction) => {
            if (e instanceof AppError)
                return res
                    .status(e.statusCode)
                    .json({ status: "error", message: e.message });

            return res.status(500).json({
                status: "error",
                message: "Inernal server error",
            });
        });
    }
}
