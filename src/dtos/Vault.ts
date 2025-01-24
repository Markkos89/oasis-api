import { IBase } from "./Base";

export interface IVault extends IBase, IVaultRequest {}

export interface IVaultRequest {
  safeAddress: string;
  threshold: number;
  owners: string[];
  active: boolean;
}
