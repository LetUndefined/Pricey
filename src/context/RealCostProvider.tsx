import React, { useState } from "react";
import { RealCostContext } from "./RealCostContext";

export const RealCostProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [value, setValue] = useState({
    monthly: 0,
    hourly: 0,
    cost: 0,
    calculatedCost: 0,
    totalHours: 0,
    percentage: 0,
    netflix: 0,
    daysToSave: 0,
    investYears: 0,
  });

  return (
    <RealCostContext value={{ value, setValue }}>{children}</RealCostContext>
  );
};
