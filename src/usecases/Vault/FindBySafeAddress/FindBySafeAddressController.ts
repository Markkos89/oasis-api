import { Request, Response } from "express";
import { FindBySafeAddressUseCase } from "./FindBySafeAddressUseCase";

export class FindBySafeAddressController {
  constructor(private findBySafeAddressUseCase: FindBySafeAddressUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { safeAddress } = request.params;
      const data = await this.findBySafeAddressUseCase.execute(safeAddress);
      return response.status(200).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || "Unexpected error.",
      });
    }
  }
}
