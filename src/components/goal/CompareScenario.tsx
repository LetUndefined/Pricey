import { useContext } from "react";
import { paycheckToGoal, savingsHoursOfWork, savingsMonthlyAmount, savingsYearsToGoal } from "../../utils/Calculations";
import { RealCostContext } from "../../context/RealCostContext";

type Props = {
  goal: number;
  percentage: number;
};

const CompareScenario = ({ goal, percentage }: Props) => {
  const context = useContext(RealCostContext);
  if (!context) return null;
  const { value } = context;

  const monthly = savingsMonthlyAmount(value.monthly, percentage);
  const years = savingsYearsToGoal(goal, monthly);
  const hours = savingsHoursOfWork(monthly, value.hourly);
  const paycheck = paycheckToGoal(goal, monthly);

  return (
    <div className="bg-card border border-border rounded-xl p-4 flex flex-col gap-3">
      <div className="flex justify-between">
        <div className="flex">
          <h3 className="text-3xl font-black text-dark tracking-tight">
            {percentage}%<span className="text-sm text-muted font-semibold ml-1 tracking-wide">&middot; €{monthly.toFixed(0)}/mo</span>
          </h3>
        </div>
        <div className="flex flex-col ">
          <h3 className="text-xl font-black text-accent tracking-tight">{years.toFixed(1)} yrs</h3>
          <span className="text-muted font-medium text-sm">to reach goal</span>
        </div>
      </div>
      <div>
        <div className="relative h-2 w-full bg-border rounded-full overflow-hidden">
          <div className="absolute left-0 top-0 h-full bg-accent/20 rounded-full" style={{ width: `${percentage * 2}%` }} />
        </div>
      </div>
      <div className="flex gap-2 text-sm text-muted font-semibold ml-1 tracking-wide ">
        <span className="border border-border rounded-lg px-2 bg-bg">{hours.toFixed(0)} hrs/mo</span>
        <span className="border border-border rounded-lg px-2 bg-bg">{paycheck >= 1 ? paycheck.toFixed(0) + " paychecks" : "less than 1 paycheck"} </span>
      </div>
    </div>
  );
};

export default CompareScenario;
