import { useContext } from "react";
import { LifeItemContext } from "../context/LifeItemContext";

const InformationCard = () => {
  const context = useContext(LifeItemContext);
  if (!context) return null;
  const { lifeItem } = context;

  return (
    <div className="flex flex-col ">
      {lifeItem.map((e) => (
        <div className="flex justify-between border-b last:border-b-0 px-5 py-4" key={e.name}>
          <span>{e.name}</span>
          <span className="font-black">{e.name.includes("%") ? `${e.cost.toFixed(2)}%` : e.name.includes("Days") ? `${e.cost.toFixed(1)} days` : `${e.cost.toFixed(2)}x`}</span>
        </div>
      ))}
    </div>
  );
};

export default InformationCard;
