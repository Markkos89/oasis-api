import { Router } from "express";

import { createVaultFactory } from "../usecases/Vault/CreateVault/CreateVaultFactory";
import { findBySafeAddressFactory } from "../usecases/Vault/FindBySafeAddress/FindBySafeAddressFactory";

const vaultRoutes = Router();

vaultRoutes.route("/").post((request, response) => {
  return createVaultFactory().handle(request, response);
});

vaultRoutes.route("/:safeAddress").get((request, response) => {
  return findBySafeAddressFactory().handle(request, response);
});

export { vaultRoutes };
