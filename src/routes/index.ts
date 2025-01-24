import { Router } from "express";

import { PREFIX_ROUTE } from "../core/url"; // Prefix Global route
//* Routes *//
import { vaultRoutes } from "./vault.routes";

const routes = Router();

routes.use(`${PREFIX_ROUTE}/vault`, vaultRoutes);

export { routes };
