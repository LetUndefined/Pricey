import { useContext } from "react";
import { LifeItemContext } from "../context/LifeItemContext";

const PersonalInformationCard = () => {
  const context = useContext(LifeItemContext);
  if (!context) return null;
  const { lifeItem } = context;
  const addedItems = lifeItem.slice(3);

  return (
    <div className="flex flex-wrap gap-2 justify-center border-[0.2rem] border-border p-4 bg-card rounded-lg">
      {addedItems.map((e) => (
        <div className="flex flex-col border border-border rounded-lg items-center justify-center px-4 bg-bg aspect-square min-w-[6rem] max-w-[6rem] " key={e.name}>
          <span className="font-bold text-md truncate w-full text-center capitalize ">{e.name.toLowerCase()}</span>
          <span className="font-black text-3xl text-accent">{e.cost.toFixed(0)}x</span>
        </div>
      ))}
    </div>
  );
};

export default PersonalInformationCard;
