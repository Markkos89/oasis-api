import { IVaultRequest } from "../dtos";

export const createVaultMock: IVaultRequest = {
  safeAddress: "0x9fC3dc011b461664c835F2527fffb1169b3C213e",
  owners: [
    "0x8f74dc011b461664c835F2527fffb1169b3C654d",
    "0x8f34dc011b461664c835F6627fjfb1169b3C987g",
  ],
  threshold: 2,
  active: false,
};
