import { RealCostContext } from "../context/RealCostContext";
import { useContext } from "react";
import {
  daysToSaveCalculation,
  hourCalculation,
  investYearsCalculation,
  netflixCalculation,
  percentageCalculation,
} from "../utils/Calculations";

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
    const netflix = netflixCalculation(value.cost);
    const daysToSave = daysToSaveCalculation(value.cost, value.monthly);
    const investYears = investYearsCalculation(value.cost);
    return setValue({
      ...value,
      totalHours: hours,
      percentage: percentage,
      netflix: netflix,
      daysToSave: daysToSave,
      investYears: investYears,
    });
  };

  return (
    <div className="bg-card border-[0.2rem] border-accent rounded-xl flex justify-between p-6 items-center">
      <div>
        <h3 className="text-md uppercase font-bold text-muted tracking-wider">
          check a price
        </h3>
        <div className="flex items-center gap-1">
          <span className="text-dark font-extrabold text-3xl">€</span>
          <input
            id="cost"
            type="number"
            onChange={handleChange}
            name="cost"
            placeholder="0"
            className="w-full font-black text-3xl outline-none appearance-none placeholder-shown:text-subtle not-placeholder-shown:text-dark"
          />
        </div>
      </div>
      <div>
        <button
          onClick={() => handleSubmit()}
          className="bg-accent text-white text-xl px-4 py-2 rounded-lg font-extrabold"
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default PriceSetter;
