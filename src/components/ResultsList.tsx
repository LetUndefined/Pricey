import { useContext } from "react";
import { RealCostContext } from "../context/RealCostContext";
import TotalHours from "./TotalHours";
import InformationCard from "./InformationCard";

const ResultsList = () => {
  const context = useContext(RealCostContext);
  if (!context) return null;

  const { value } = context;

  return (
    <div>
      <header>
        <h3 className="text-md tracking-widest uppercase font-bold text-muted">
          What it costs you
        </h3>
      </header>
      <div className="flex flex-col gap-6">
        <div className="bg-card border rounded-xl flex p-6 flex flex-col gap-1">
          <TotalHours totalHours={value.totalHours} />
        </div>
        <div className="border rounded-xl bg-card">
          <InformationCard value={value} />
        </div>
      </div>
    </div>
  );
};

export default ResultsList;
