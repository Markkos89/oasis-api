import { v4 as uuid } from "uuid";

import { IVault, IVaultRequest } from "../../../dtos/Vault";
import { IResultPaginated } from "../../../dtos/Pagination";
import { resultPaginated } from "../../../helpers/pagination";
import { IVaultRepository } from "../../IVaultRepository";

export class InMemoryVaultRepository implements IVaultRepository {
  vaults: IVault[] = [];

  async create(data: IVaultRequest): Promise<Error | IVault> {
    this.vaults.push({
      ...data,
      id: 1,
    });

    return this.vaults[this.vaults.length - 1];
  }

  async update(
    safeAddress: string,
    isActive: boolean
  ): Promise<Error | IVault> {
    const vault = this.vaults
      .filter((obj) => obj.safeAddress === safeAddress)
      .map((item) => {
        item.active = isActive;
      });

    return this.vaults.filter((obj) => obj.safeAddress === safeAddress)[0];
  }

  async findBySafeAddress(safeAddress: string): Promise<IVault | null> {
    const user = this.vaults.filter(
      (obj) => obj.safeAddress === safeAddress
    )[0];
    return user ?? null;
  }
}
