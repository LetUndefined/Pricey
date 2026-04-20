import { RealCostContext } from "../context/RealCostContext";
import { useContext } from "react";
import { workingDaysToAfford, hourCalculation, investYearsCalculation, percentageCalculation } from "../utils/Calculations";

const PriceSetter = () => {
  const context = useContext(RealCostContext);
  if (!context) return null;

  const { value, setValue } = context;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = () => {
    if (!value.cost || !value.hourly) return;
    const hours = hourCalculation(value.cost, value.hourly);
    const percentage = percentageCalculation(value.cost, value.monthly);
    const daysToSave = workingDaysToAfford(value.cost, value.hourly);
    const investYears = investYearsCalculation(value.cost);
    return setValue({
      ...value,
      calculatedCost: value.cost,
      totalHours: hours,
      percentage: percentage,
      daysToSave: daysToSave,
      investYears: investYears,
    });
  };

  return (
    <div className="bg-card border-[0.2rem] border-accent rounded-xl flex justify-between p-6 items-center">
      <div>
        <h3 className="text-md uppercase font-bold text-muted tracking-wider">check a price</h3>
        <div className="flex items-center gap-1">
          <span className="text-dark font-extrabold text-3xl">€</span>
          <input
            id="cost"
            type="number"
            onChange={handleChange}
            name="cost"
            placeholder="0"
            value={value.cost || ""}
            className="w-full font-black text-3xl outline-none appearance-none placeholder-shown:text-subtle not-placeholder-shown:text-dark"
          />
        </div>
      </div>
      <div>
        <button onClick={() => handleSubmit()} className="bg-accent text-white text-xl px-4 py-2 rounded-lg font-extrabold shadow-lg shadow-accent/50">
          Calculate
        </button>
      </div>
    </div>
  );
};

export default PriceSetter;
