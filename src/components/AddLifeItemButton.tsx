import { Plus } from "lucide-react";
import { useContext, useState } from "react";
import AddLifeItemModal from "./AddLifeItemModal";
import { LifeItemContext } from "../context/LifeItemContext";
import { RealCostContext } from "../context/RealCostContext";
import type { LifeItem } from "../interface";

const AddLifeItemButton = () => {
  const [open, setOpen] = useState(false);
  const context = useContext(LifeItemContext);
  const realCost = useContext(RealCostContext);
  if (!context || !realCost) return null;
  const { addUserItem } = context;

  const handleAdd = (item: LifeItem) => {
    addUserItem({
      name: item.name,
      originalPrice: item.originalPrice,
      icon: item.icon,
    });
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 border-dashed border bg-card rounded-lg p-4 w-full"
      >
        <div className="bg-accent rounded-full p-2">
          <Plus className="text-white" size={20} />
        </div>
        <h3 className="font-bold">Add a life item</h3>
      </button>
      {open && (
        <AddLifeItemModal
          onClose={() => setOpen(false)}
          onAdd={(item) => handleAdd(item)}
        />
      )}
    </>
  );
};

export default AddLifeItemButton;
