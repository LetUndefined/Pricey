import { useContext } from "react";
import { LifeItemContext } from "../context/LifeItemContext";
import { ICON_MAP } from "../utils/icons";

const LifeItemList = () => {
  const context = useContext(LifeItemContext);
  if (!context) return null;
  const { userItems } = context;

  return (
    <div>
      <div className="border border-border rounded-lg bg-card">
        {userItems.map((e) => {
          const Icon = ICON_MAP[e.icon];
          return (
            <div
              key={e.name}
              className="border-b border-border last:border-b-0 flex justify-between py-3 px-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-md bg-bg">
                  {Icon && <Icon size={20} />}
                </div>
                <h4 className="text-xl font-bold">{e.name}</h4>
              </div>
              <span className="font-black flex items-center text-xl">
                €{e.originalPrice}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LifeItemList;
