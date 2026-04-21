type Props = {
  investment: number;
  setInvestment: (value: number) => void;
};

const InvestSetter = ({ investment, setInvestment }: Props) => {
  return (
    <div className="border bg-dark rounded-xl flex flex-col">
      <div className="m-6 flex gap-4 flex-col">
        <div className="flex justify-between">
          <h1 className="text-sm tracking-widest uppercase font-bold text-muted/30">What if you invested it?</h1>
        </div>
        <p className="text-white font-extrabold text-2xl leading-none">
          Turn spending into <span className="text-accent italic">future wealth.</span>
        </p>
        <div className="flex justify-between gap-2">
          <div className="flex-1 rounded-md bg-muted/10 py-2 pl-4 text-left">
            <p className="font-bold tracking-widest text-xs text-muted uppercase">Invest</p>
            <div className="flex items-center gap-1">
              <span className="text-white font-extrabold text-xl">€</span>
              <input type="text" placeholder="0" value={investment || ""} onChange={(e) => setInvestment(Number(e.target.value))} className="outline-none bg-transparent w-full text-white font-extrabold text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestSetter;
