import { ExpressRouterHandler } from "./Express/ExpressRouterHandler";
import { FocusExpressRouter } from "./Express/FocusExpressRouter";
import { UsersExpressRouter } from "./Express/UsersExpressRouter";

export const ExpressRouterV1Handler = new ExpressRouterHandler("/api/v1");

ExpressRouterV1Handler.Add(new UsersExpressRouter("/users").Router());
ExpressRouterV1Handler.Add(new FocusExpressRouter("/focus").Router());
