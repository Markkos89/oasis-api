import { apiKit } from "../../../libs";
import { IVaultRepository } from "../../../repositories";
import { IVault } from "./FindBySafeAddressDTO";

export class FindBySafeAddressUseCase {
  constructor(private vaultRepository: IVaultRepository) {}

  async execute(safeAddress: string): Promise<IVault | Error> {
    const vault = await this.vaultRepository.findBySafeAddress(safeAddress);

    if (!vault) {
      throw new Error("Vault does not exists.");
    }

    const safeInfo = await apiKit.getSafeInfo(safeAddress);

    const isActive = vault.threshold > safeInfo.owners.length / 2;

    const vaultUpdated = await this.vaultRepository.update(
      safeAddress,
      isActive
    );
    return vaultUpdated;
  }
}
