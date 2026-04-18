type Props = {
  value: {
    monthly: number;
    hourly: number;
    cost: number;
    totalHours: number;
    percentage: number;
    netflix: number;
    daysToSave: number;
    investYears: number;
  };
};

const InformationCard = ({ value }: Props) => {
  const personalList = [
    { name: "% of your month", value: value.percentage.toFixed(2) + "%" },
    { name: "Months of Netflix", value: value.netflix.toFixed(1) + " months" },
    { name: "Days to save up", value: value.daysToSave.toFixed(1) + " days" },
    {
      name: "Yearly return (7%)",
      value: "€" + value.investYears.toFixed(2) + "/yr",
    },
  ];

  return (
    <div className="flex flex-col ">
      {personalList.map((e) => (
        <div
          className="flex justify-between border-b last:border-b-0 px-5 py-4"
          key={e.name}
        >
          <span>{e.name}</span>
          <span className="font-black">{e.value}</span>
        </div>
      ))}
    </div>
  );
};

export default InformationCard;
