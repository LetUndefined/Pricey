export interface RealCostContextType {
  value: { monthly: number; hourly: number; cost: number; totalHours: number; percentage: number; netflix: number; daysToSave: number; investYears: number };
  setValue: React.Dispatch<
    React.SetStateAction<{
      monthly: number;
      hourly: number;
      cost: number;
      totalHours: number;
      percentage: number;
      netflix: number;
      daysToSave: number;
      investYears: number;
    }>
  >;
}
