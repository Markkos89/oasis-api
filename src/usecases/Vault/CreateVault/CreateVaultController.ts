import { Request, Response } from "express";
import { CreateVaultUseCase } from "./CreateVaultUseCase";

export class CreateVaultController {
  constructor(private createVaultUseCase: CreateVaultUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { safeAddress, threshold, owners, active } = request.body;

    try {
      const data = await this.createVaultUseCase.execute({
        safeAddress,
        threshold,
        owners,
        active,
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || "Unexpected error.",
      });
    }
  }
}
