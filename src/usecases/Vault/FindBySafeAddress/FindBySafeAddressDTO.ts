export interface IVault {
  id: number;
  safeAddress: string;
  threshold: number;
  owners: string[];
  active: boolean;
}
