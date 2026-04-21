import { useEffect, useRef } from "react";
import { investFutureValue, investTotalGain } from "../../utils/Calculations";
import { CountUp } from "countup.js";

type Props = {
  name: string;
  rate: number;
  risk: string;
  variant: string;
  investment: number;
  years: number;
};

const InvestOptions = ({ name, rate, risk, variant, investment, years }: Props) => {
  const futureValue = investFutureValue(investment, rate, years);
  const gain = investTotalGain(investment, rate, years);

  const elRef = useRef<HTMLHeadingElement>(null);
  const countUpRef = useRef<CountUp | null>(null);

  useEffect(() => {
    if (!elRef.current) return;
    if (!countUpRef.current) {
      countUpRef.current = new CountUp(elRef.current, futureValue, { decimalPlaces: 1, duration: 0.6 });
      countUpRef.current.start();
    } else {
      countUpRef.current.update(futureValue);
    }
  }, [futureValue]);
  return (
    <div className="bg-card border border-border rounded-xl p-4 flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h4 className="font-black text-xl">{name}</h4>
          <span className="text-xs">~{rate}% avg annual return</span>
        </div>
        <span className={`${variant === "hot" ? "border border-accent text-accent" : variant === "moderate" ? "border border-green text-green" : "border border-muted text-muted"} text-xs font-bold rounded-md py-1 px-2`}>
          {risk}
        </span>
      </div>
      <div className="flex items-end font-black gap-5">
        <h2 ref={elRef} className="text-3xl tracking-tight"></h2>
        <span className="text-xs bg-green/10 rounded-md py-1 px-2 text-green ">€{gain.toLocaleString("en-US", { maximumFractionDigits: 0 })}</span>
      </div>
    </div>
  );
};

export default InvestOptions;
