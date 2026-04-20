export const hourCalculation = (cost: number, hourly: number) => {
  return cost / hourly;
};

export const percentageCalculation = (cost: number, monthly: number) => {
  return (cost / monthly) * 100;
};

export const workingDaysToAfford = (cost: number, hourly: number) => {
  return cost / (hourly * 8);
};

export const investYearsCalculation = (cost: number) => {
  return cost * 0.07;
};

export const savingsMonthlyAmount = (monthly: number, percentage: number) => {
  return (monthly * percentage) / 100;
};

export const savingsHoursOfWork = (monthlyAmount: number, hourly: number) => {
  return monthlyAmount / hourly;
};

export const savingsYearsToGoal = (goal: number, monthlyAmount: number) => {
  return goal / monthlyAmount / 12;
};

export const paycheckToGoal = (goal: number, monthly: number) => {
  return goal / monthly;
};