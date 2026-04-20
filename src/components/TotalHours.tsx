import { CountUp } from "countup.js";
import { useEffect, useRef } from "react";

type Props = { totalHours: number };

const TotalHours = ({ totalHours }: Props) => {
  const elRef = useRef<HTMLSpanElement>(null);
  const countUpRef = useRef<CountUp | null>(null);

  useEffect(() => {
    if (!elRef.current) return;
    if (!countUpRef.current) {
      countUpRef.current = new CountUp(elRef.current, totalHours, { decimalPlaces: 1, duration: 0.6 });
      countUpRef.current.start();
    } else {
      countUpRef.current.update(totalHours);
    }
  }, [totalHours]);

  return (
    <>
      <span ref={elRef} className="text-5xl font-black text-accent tracking-tighter" />
      <h4 className="font-extrabold">Hours worked to afford this</h4>
    </>
  );
};

export default TotalHours;
