import { useContext } from "react";
import { LifeItemContext } from "../context/LifeItemContext";
import { ICON_MAP } from "../utils/icons";
import { Trash2 } from "lucide-react";
import { deleteLifeItem } from "../hooks/supabase.api";

type Props = {
  edit: boolean;
};

const LifeItemList = ({ edit }: Props) => {
  const context = useContext(LifeItemContext);
  if (!context) return null;
  const { userItems, setUserItems } = context;

  const deleteItem = (id: string) => {
    setUserItems((prev) => prev.filter((e) => e.id !== id));

    deleteLifeItem(id);
  };
  return (
    <div>
      <div className="border border-border rounded-lg bg-card">
        {userItems.map((e) => {
          const Icon = ICON_MAP[e.icon];
          return (
            <div key={e.name} className="border-b border-border last:border-b-0 flex justify-between py-3 px-6 items-center">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-md bg-bg">{Icon && <Icon size={20} />}</div>
                <h4 className="text-xl font-bold">{e.name}</h4>
              </div>
              {edit ? (
                <button onClick={() => e.id && deleteItem(e.id)} className="bg-accent rounded-lg p-2">
                  <Trash2 size={18} className="text-white" />
                </button>
              ) : (
                <span className="font-black flex items-center text-xl">€{e.originalPrice}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LifeItemList;
