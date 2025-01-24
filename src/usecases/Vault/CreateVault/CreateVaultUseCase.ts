import { IVaultRepository } from "../../../repositories";
import { ICreateVault, ICreateVaultRequest } from "./CreateVaultDTO";

export class CreateVaultUseCase {
  constructor(private vaultRepository: IVaultRepository) {}

  async execute(data: ICreateVaultRequest): Promise<ICreateVault | Error> {
    if (data.safeAddress) {
      const vaultExists = await this.vaultRepository.findBySafeAddress(
        data.safeAddress
      );
      if (vaultExists) {
        throw new Error("Vault already exists.");
      }
    }

    const result = await this.vaultRepository.create(data);
    return result;
  }
}
