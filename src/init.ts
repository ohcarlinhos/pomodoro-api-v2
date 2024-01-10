import "dotenv/config";
import "express-async-errors";

import { ExpressServer } from "./Server/ExpressServer";
import { ExpressCorsConfig } from "./Server/ExpressCorsConfig";
import { ExpressRoutesConfig } from "./Server/ExpressRoutesConfig";
import { ExpressRouterV1Handler } from "./Routes";
import { ExpressErrorHandlerConfig } from "./Server/ExpressErrorHandlerConfig";

const App = new ExpressServer(3000);
App.Add(new ExpressCorsConfig());
App.Add(new ExpressRoutesConfig(ExpressRouterV1Handler.Router()));
App.Add(new ExpressErrorHandlerConfig());
App.Run();
