type Props = {
  timeframes: number[];
  isActive: number;
  setIsActive: React.Dispatch<React.SetStateAction<number>>;
};

const TimeFrameFilter = ({ timeframes, isActive, setIsActive }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-sm tracking-widest uppercase font-bold text-muted">Timeframe</h4>
      <div className="flex justify-evenly ">
        {timeframes.map((e) => (
          <div onClick={() => setIsActive(e)} className={` ${isActive === e ? "bg-dark text-white" : "bg-card"}  border border-dark/20 py-1 px-6 rounded-lg font-bold text-sm`} key={e}>
            {e}y
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeFrameFilter;
