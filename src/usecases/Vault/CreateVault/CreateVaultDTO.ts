export interface ICreateVault extends ICreateVaultRequest {
  id: number;
  // created_at: Date;
  // updated_at: Date;
}

export interface ICreateVaultRequest {
  safeAddress: string;
  threshold: number;
  owners: string[];
  active: boolean;
}
