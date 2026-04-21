import { useState } from "react";
import InvestSetter from "../components/investing/InvestSetter";
import TimeFrameFilter from "../components/investing/TimeFrameFilter";
import InvestOptions from "../components/investing/InvestOptions";

const Investing = () => {
  const timeframes = [5, 10, 20, 30];
  const [isActive, setIsActive] = useState(timeframes[0]);
  const [investment, setInvestment] = useState<number>(0);
  const INVEST_SCENARIOS = [
    { name: "NASDAQ-100", rate: 13.8, risk: "Risky", variant: "hot" },
    { name: "S&P 500", rate: 10.5, risk: "Moderate", variant: "moderate" },
    { name: "World ETF", rate: 8.9, risk: "Moderate", variant: "moderate" },
    { name: "Gov. Bonds", rate: 3.0, risk: "Low risk", variant: "safe" },
  ];

  return (
    <div className="flex flex-col gap-4 py-4">
      <InvestSetter investment={investment} setInvestment={setInvestment} />
      <TimeFrameFilter timeframes={timeframes} isActive={isActive} setIsActive={setIsActive} />
      {INVEST_SCENARIOS.map((e) => {
        return <InvestOptions name={e.name} rate={e.rate} risk={e.risk} variant={e.variant} investment={investment} years={isActive} key={e.name} />;
      })}
    </div>
  );
};

export default Investing;
