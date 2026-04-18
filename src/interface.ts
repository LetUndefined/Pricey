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

export interface LifeItemContextType {
  lifeItem: {
    name: string;
    cost: number;
  }[];
  setLifeItem: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        cost: number;
      }[]
    >
  >;
  userItems: { name: string; cost: number; originalPrice: number }[];
  setUserItems: React.Dispatch<React.SetStateAction<{ name: string; cost: number; originalPrice: number }[]>>;
}

export interface LifeItem {
  name: string;
  cost: number;
}
