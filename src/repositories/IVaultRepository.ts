import { IVault, IVaultRequest } from "../dtos";

export interface IVaultRepository {
  create(data: IVaultRequest): Promise<IVault | Error>;
  findBySafeAddress(safeAddress: string): Promise<IVault | null>;
  update(safeAddress: string, isActive: boolean): Promise<IVault | Error>;
}
