import { PrismaVaultRepository } from "../../../repositories/implementations/prisma";
import { CreateVaultController } from "./CreateVaultController";
import { CreateVaultUseCase } from "./CreateVaultUseCase";

export const createVaultFactory = () => {
  const prismaVaultRepository = new PrismaVaultRepository();
  const createVaultUseCase = new CreateVaultUseCase(prismaVaultRepository);
  const createVaultController = new CreateVaultController(createVaultUseCase);

  return createVaultController;
};
