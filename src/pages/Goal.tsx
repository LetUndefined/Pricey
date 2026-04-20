import { useState } from "react";
import GoalSetter from "../components/goal/GoalSetter";
import SavingSlider from "../components/goal/SavingSlider";
import CompareScenario from "../components/goal/CompareScenario";

const Compare = () => {
  const [goal, setGoal] = useState<number>(0);
  const scenarios = [10, 20, 30];

  return (
    <div className="flex flex-col gap-4 py-4">
      <GoalSetter goal={goal} setGoal={setGoal} />
      <SavingSlider goal={goal} />
      <div>
        <h2 className="text-md tracking-widest uppercase font-bold text-muted">Compare Scenarios</h2>
      </div>
      {scenarios.map((pct) => (
        <CompareScenario goal={goal} percentage={pct} key={pct} />
      ))}
    </div>
  );
};

export default Compare;
