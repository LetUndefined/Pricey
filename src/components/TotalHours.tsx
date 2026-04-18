type Props = {
  totalHours: number;
};

const TotalHours = ({ totalHours }: Props) => {
  return (
    <>
      <h4 className="text-md font-extrabold text-muted">Hours of your life</h4>
      <span className="text-5xl font-black text-accent tracking-tighter ">
        {totalHours.toFixed(2)}
      </span>
      <h4 className="font-extrabold">Hours worked to afford this</h4>
    </>
  );
};

export default TotalHours;
