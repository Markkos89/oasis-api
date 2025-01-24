import { FindBySafeAddressUseCase } from "./FindBySafeAddressUseCase";
import { InMemoryVaultRepository } from "../../../repositories/implementations/in-memory";
import { CreateVaultUseCase } from "../CreateVault/CreateVaultUseCase";
import { IVault } from "../../../dtos/Vault";
import { createVaultMock } from "../../../mocks";

describe("Find a vault by safe Address usecase", () => {
  let inMemoryVaultRepository: InMemoryVaultRepository;
  let findBySafeAddressUseCase: FindBySafeAddressUseCase;
  let createVaultUseCase: CreateVaultUseCase;

  beforeAll(() => {
    inMemoryVaultRepository = new InMemoryVaultRepository();
    findBySafeAddressUseCase = new FindBySafeAddressUseCase(
      inMemoryVaultRepository
    );
    createVaultUseCase = new CreateVaultUseCase(inMemoryVaultRepository);
  });

  it("Should be able to find safeAddress vault", async () => {
    const result = await createVaultUseCase.execute(createVaultMock);
    const safeAddress = (result as IVault).safeAddress;

    await expect(
      findBySafeAddressUseCase.execute(safeAddress)
    ).resolves.not.toThrow();
  });
});
