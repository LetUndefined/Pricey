import { X } from "lucide-react";
import { updateProfile } from "../hooks/supabase.api";
import type { RealCostContextType } from "../interface";

type Props = {
  label: string;
  field: "monthly" | "hourly";
  value: RealCostContextType["value"];
  setValue: RealCostContextType["setValue"];
  onClose: () => void;
};

const EditValueModal = ({ label, onClose, field, value, setValue }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [field]: e.target.value });
  };

  const handleSave = async () => {
    await updateProfile(value.monthly, value.hourly);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50 animate-[fadeIn_0.2s_ease]" onClick={onClose}>
      <div className="bg-card w-full rounded-t-2xl p-6 flex flex-col gap-4 animate-[slideUp_0.3s_ease]" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center">
          <h2 className="font-black text-lg text-dark capitalize">{label}</h2>
          <button onClick={onClose}>
            <X size={20} className="text-muted" />
          </button>
        </div>
        <div className="flex items-center border border-border rounded-xl px-4 py-3 gap-2">
          <span className="font-bold text-muted">€</span>
          <input type="number" className="w-full outline-none font-bold text-dark text-lg bg-transparent" value={value[field]} name={label} autoFocus min={0} onChange={handleChange} />
        </div>
        <button className="bg-accent text-white font-black rounded-xl py-4" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditValueModal;
