import { useContext, useState } from "react";
import { RealCostContext } from "../../context/RealCostContext";
import { Info } from "lucide-react";
import GoalInfoModal from "./GoalInfoModal";

type Props = { goal: number; setGoal: (goal: number) => void };

const GoalSetter = ({ goal, setGoal }: Props) => {
  const [modal, setModal] = useState(false);
  const context = useContext(RealCostContext);
  if (!context) return null;

  const { value } = context;
  return (
    <div className="border bg-dark rounded-xl flex flex-col">
      <div className="m-6 flex gap-4 flex-col">
        <div className="flex justify-between">
          <h1 className="text-sm tracking-widest uppercase font-bold text-muted/30">Saving planner</h1>
          <Info size={20} className="text-white" onClick={() => setModal(true)} />
        </div>
        <p className="text-white font-extrabold text-2xl leading-none">
          How fast can you <span className="text-accent italic">get there.</span>
        </p>
        <div className="flex justify-between gap-2">
          <div className="flex-1 rounded-md bg-muted/10 py-2 pl-4 text-left">
            <p className="font-bold tracking-widest text-xs text-muted uppercase">Goal</p>
            <div className="flex items-center gap-1">
              <span className="text-white font-extrabold text-xl">€</span>
              <input type="text" placeholder="0" value={goal || ""} onChange={(e) => setGoal(Number(e.target.value))} className="outline-none bg-transparent w-full text-white font-extrabold text-xl" />
            </div>
          </div>
          <div className="flex-1 rounded-md bg-muted/10 py-2 pl-4 text-left">
            <p className="font-bold tracking-widest text-xs text-muted uppercase">Salary / MO</p>
            <div className="flex items-center gap-1">
              <span className="text-white font-extrabold text-xl">€</span>
              <span className="font-extrabold text-xl text-white">{value.monthly}</span>
            </div>
          </div>
        </div>
      </div>
      {modal && <GoalInfoModal onClose={() => setModal(false)} />}
    </div>
  );
};

export default GoalSetter;
