import { CreateVaultUseCase } from "./CreateVaultUseCase";
import { InMemoryVaultRepository } from "../../../repositories/implementations/in-memory";
import { createVaultMock } from "../../../mocks";

describe("Create Vault usecase", () => {
  let inMemoryVaultRepository!: InMemoryVaultRepository;
  let createVaultUseCase: CreateVaultUseCase;

  beforeAll(() => {
    createVaultUseCase = new CreateVaultUseCase(inMemoryVaultRepository);
  });

  it("Should be able to create a new Vault ", async () => {
    await expect(
      createVaultUseCase.execute(createVaultMock)
    ).resolves.not.toThrow();

    expect(inMemoryVaultRepository.vaults).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          safeAddress: "0x9fC3dc011b461664c835F2527fffb1169b3C213e",
          owners: [
            "0x8f74dc011b461664c835F2527fffb1169b3C654d",
            "0x8f34dc011b461664c835F6627fjfb1169b3C987g",
          ],
          threshold: 2,
          active: false,
        }),
      ])
    );
  });
});
