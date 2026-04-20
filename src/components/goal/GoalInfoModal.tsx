import { X } from "lucide-react";

type Props = { onClose: () => void };

const GoalInfoModal = ({ onClose }: Props) => {
  return (
    <div className="fixed inset-0 bg-dark/60 flex items-end z-50" onClick={onClose}>
      <div className="bg-card w-full rounded-t-2xl p-6 flex flex-col gap-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h2 className="font-black text-lg text-dark">How this works</h2>
          <button onClick={onClose} className="text-muted">
            <X size={20} />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-sm text-dark">1. Set your goal</p>
            <p className="text-sm text-muted">Enter the price of something you want to save up for.</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold text-sm text-dark">2. Adjust the slider</p>
            <p className="text-sm text-muted">Choose what percentage of your monthly salary you can set aside.</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold text-sm text-dark">3. Compare scenarios</p>
            <p className="text-sm text-muted">See how saving 10%, 20%, or 30% changes how fast you get there.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalInfoModal;
