



export const hourCalculation = (cost: number, hourly: number) => {
  return cost / hourly;
};

export const percentageCalculation = (cost: number, monthly: number) => {
  return (cost / monthly) * 100;
};

export const daysToSaveCalculation = (cost: number, monthly: number) => {
  return cost / (monthly / 30);
};

export const investYearsCalculation = (cost: number) => {
  return cost * 0.07;
};
