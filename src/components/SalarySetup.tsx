import { useContext } from "react";
import { RealCostContext } from "../context/RealCostContext";

const SalarySetup = () => {
  const context = useContext(RealCostContext);
  if (!context) return null;

  const { value, setValue } = context;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: Number(e.target.value) });
  };

  return (
    <div className="border bg-dark rounded-xl flex flex-col">
      <div className="m-6 flex gap-4 flex-col">
        <h1 className="text-sm tracking-widest uppercase font-bold text-muted/30">What does it really cost?</h1>
        <p className="text-white font-extrabold text-2xl leading-none">
          See any price in
          <span className="text-accent italic">your real life.</span>
        </p>
        <div className="flex justify-center gap-2 my-2 ">
          <div className="flex-1 rounded-md bg-muted/10 py-2 pl-4">
            <label htmlFor="perMonth" className="font-bold tracking-widest text-xs text-muted mt-4 uppercase">
              Salary / MO
            </label>
            <div className="flex items-center gap-2">
              <span className="text-white font-extrabold text-xl">€</span>
              <input
                id="perMonth"
                type="number"
                name="monthly"
                placeholder="0"
                value={value.monthly}
                onChange={handleChange}
                className="w-full font-extrabold text-xl outline-none appearance-none placeholder-shown:text-subtle not-placeholder-shown:text-white"
              />
            </div>
          </div>
          <div className="flex-1 rounded-md bg-muted/10 py-2 pl-4">
            <label htmlFor="perHour" className="font-bold tracking-widest text-xs text-muted mt-4 uppercase">
              Per Hour
            </label>
            <div className="flex items-center gap-2">
              <span className="text-white font-extrabold text-xl">€</span>
              <input
                id="perHour"
                name="hourly"
                type="number"
                onChange={handleChange}
                placeholder="0"
                value={value.hourly}
                className="w-full font-extrabold text-xl outline-none appearance-none placeholder-shown:text-subtle not-placeholder-shown:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalarySetup;
