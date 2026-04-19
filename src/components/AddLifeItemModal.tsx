import { X } from "lucide-react";
import { useState } from "react";
import { ICON_MAP, ICON_KEYS } from "../utils/icons";

type Props = {
  onClose: () => void;
  onAdd: (item: { name: string; originalPrice: number; icon: string }) => void;
};

const AddLifeItemModal = ({ onClose, onAdd }: Props) => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [icon, setIcon] = useState(ICON_KEYS[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !cost) return;
    onAdd({ name, originalPrice: Number(cost), icon });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-end justify-center z-50 animate-[fadeIn_0.2s_ease]"
      onClick={onClose}
    >
      <div
        className="bg-card w-full rounded-t-2xl p-6 flex flex-col gap-4 animate-[slideUp_0.3s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="font-black text-lg">
            Add a life item
            <p className="text-muted text-xs">
              Add the average cost per payment
            </p>
          </h2>
          <button onClick={onClose}>
            <X size={20} className="text-muted" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold tracking-widest uppercase text-muted">
              Icon
            </label>
            <div className="grid grid-cols-8 gap-2">
              {ICON_KEYS.map((key) => {
                const Icon = ICON_MAP[key];
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setIcon(key)}
                    className={`p-2 rounded-lg flex items-center justify-center ${icon === key ? "bg-accent text-white" : "bg-muted/10 text-muted"}`}
                  >
                    <Icon size={18} />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold tracking-widest uppercase text-muted">
              Name
            </label>
            <input
              type="text"
              placeholder="e.g. Netflix"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-lg px-3 py-2 outline-none text-base font-bold"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold tracking-widest uppercase text-muted">
              Average cost
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 gap-1">
              <span className="font-bold text-muted">$</span>
              <input
                type="number"
                placeholder="0"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                className="w-full outline-none font-bold text-base"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-accent text-white font-black rounded-lg py-3 tracking-wide"
          >
            Add item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLifeItemModal;
