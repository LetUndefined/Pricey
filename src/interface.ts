export interface RealCostContextType {
  value: { monthly: number; hourly: number; cost: number; calculatedCost: number; totalHours: number; percentage: number; netflix: number; daysToSave: number; investYears: number };

  setValue: React.Dispatch<
    React.SetStateAction<{
      monthly: number;
      hourly: number;
      cost: number;
      calculatedCost: number;
      totalHours: number;
      percentage: number;
      netflix: number;
      daysToSave: number;
      investYears: number;
    }>
  >;
}

export type ItemUnit = "%" | "days" | "€" | "x";

export interface LifeItemContextType {
  lifeItem: { name: string; cost: number; unit: ItemUnit; icon: string }[];
  addUserItem: (item: { name: string; originalPrice: number; icon: string }) => Promise<void>;
  userItems: { id?: string; name: string; cost: number; originalPrice: number; unit: string; icon: string }[];
}

export interface LifeItem {
  name: string;
  originalPrice: number;
  icon: string;
}
