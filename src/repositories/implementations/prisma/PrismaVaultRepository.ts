import { IVaultRequest, IVault } from "../../../dtos";
import { IVaultRepository } from "../../IVaultRepository";

import { prismaClient } from "../../../libs";

export class PrismaVaultRepository implements IVaultRepository {
  private repository = prismaClient.vault;

  async create(data: IVaultRequest): Promise<IVault | Error> {
    const vault = await this.repository.create({
      data: {
        ...data,
      },
    });
    return vault;
  }

  async findBySafeAddress(safeAddress: string): Promise<IVault | null> {
    const vault = await this.repository.findFirst({
      where: { safeAddress: safeAddress },
    });
    return vault ?? null;
  }

  async update(
    safeAddress: string,
    isActive: boolean
  ): Promise<IVault | Error> {
    const vault = await this.repository.update({
      where: { safeAddress },
      data: {
        active: isActive,
      },
    });

    return vault ?? null;
  }
}
