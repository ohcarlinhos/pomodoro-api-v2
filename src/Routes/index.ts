import { RouterHandler } from "./Express/RouterHandler";
import { FocusRouter } from "./Express/FocusRouter";
import { UsersRouter } from "./Express/UsersRouter";

export const ExpressRouterV1Handler = new RouterHandler("/api/v1");

ExpressRouterV1Handler.Add(new UsersRouter("/user").Router());
ExpressRouterV1Handler.Add(new FocusRouter("/focus").Router());
