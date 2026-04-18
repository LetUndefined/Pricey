import { X } from "lucide-react";
import { useState } from "react";

type Props = {
  onClose: () => void;
  onAdd: (item: { name: string; cost: number }) => void;
};

const AddLifeItemModal = ({ onClose, onAdd }: Props) => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !cost) return;
    onAdd({ name, cost: Number(cost) });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50 animate-[fadeIn_0.2s_ease]" onClick={onClose}>
      <div className="bg-card w-full rounded-t-2xl p-6 flex flex-col gap-4 animate-[slideUp_0.3s_ease]" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center">
          <h2 className="font-black text-lg">Add a life item</h2>
          <button onClick={onClose}>
            <X size={20} className="text-muted" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold tracking-widest uppercase text-muted">Name</label>
            <input type="text" placeholder="e.g. Netflix" value={name} onChange={(e) => setName(e.target.value)} className="border rounded-lg px-3 py-2 outline-none text-base font-bold" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold tracking-widest uppercase text-muted">Monthly cost</label>
            <div className="flex items-center border rounded-lg px-3 py-2 gap-1">
              <span className="font-bold text-muted">$</span>
              <input type="number" placeholder="0" value={cost} onChange={(e) => setCost(e.target.value)} className="w-full outline-none font-bold text-base" />
            </div>
          </div>
          <button type="submit" className="bg-accent text-white font-black rounded-lg py-3 tracking-wide">
            Add item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLifeItemModal;
