import { PrismaVaultRepository } from "../../../repositories/implementations/prisma";
import { FindBySafeAddressController } from "./FindBySafeAddressController";
import { FindBySafeAddressUseCase } from "./FindBySafeAddressUseCase";

export const findBySafeAddressFactory = () => {
  const prismaVaultRepository = new PrismaVaultRepository();
  const findSafeAddressUseCase = new FindBySafeAddressUseCase(
    prismaVaultRepository
  );
  const findBySafeAddressController = new FindBySafeAddressController(
    findSafeAddressUseCase
  );

  return findBySafeAddressController;
};
