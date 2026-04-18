import React, { useContext, useEffect, useState } from "react";
import { LifeItemContext } from "./LifeItemContext";
import { RealCostContext } from "./RealCostContext";

export const LifeItemProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useContext(RealCostContext);
  const v = value?.value;
  const [userItems, setUserItems] = useState<{ name: string; cost: number; originalPrice: number }[]>([]);

  const [lifeItem, setLifeItem] = useState([
    { name: "% of your month salary", cost: v?.percentage ?? 0 },
    { name: "Days to save up", cost: v?.daysToSave ?? 0 },
    { name: "Yearly return if invested (7%)", cost: v?.investYears ?? 0 },
  ]);

  useEffect(() => {
    setLifeItem([
      { name: "% of your monthly salary", cost: v?.percentage ?? 0 },
      { name: "Days to save up", cost: v?.daysToSave ?? 0 },
      { name: "Yearly return if invested (7%)", cost: v?.investYears ?? 0 },
      ...userItems.map((item) => ({
        ...item,
        cost: (v?.calculatedCost ?? 0) / item.originalPrice,
      })),
    ]);
  }, [v?.percentage, v?.daysToSave, v?.investYears, v?.calculatedCost, userItems]);

  return <LifeItemContext value={{ lifeItem, setLifeItem, userItems, setUserItems }}>{children}</LifeItemContext>;
};
