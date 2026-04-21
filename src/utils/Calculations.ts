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

export const investFutureValue = (cost: number, rate: number, years: number) => {
  return cost * Math.pow(1 + rate / 100, years);
};

export const investTotalGain = (cost: number, rate: number, years: number) => {
  return investFutureValue(cost, rate, years) - cost;
};

export const investYearsToDouble = (rate: number) => {
  return 72 / rate;
};

export const investMonthlyToReachGoal = (goal: number, rate: number, years: number) => {
  const monthlyRate = rate / 100 / 12;
  const months = years * 12;
  if (monthlyRate === 0) return goal / months;
  return (goal * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1);
};

export const investBreakEvenYears = (rate: number) => {
  return Math.log(2) / Math.log(1 + rate / 100);
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
