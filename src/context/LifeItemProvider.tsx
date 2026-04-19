import React, { useContext, useEffect, useState } from "react";
import { LifeItemContext } from "./LifeItemContext";
import { RealCostContext } from "./RealCostContext";
import { fetchLifeItems, insertLifeItem } from "../hooks/supabase.api";
import type { ItemUnit } from "../interface";

export const LifeItemProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useContext(RealCostContext);
  const v = value?.value;

  const [userItems, setUserItems] = useState<
    {
      id?: string;
      name: string;
      cost: number;
      originalPrice: number;
      unit: "x";
      icon: string;
    }[]
  >([]);

  useEffect(() => {
    fetchLifeItems().then((data) => {
      setUserItems(
        data.map((item) => ({
          id: item.id,
          name: item.name,
          originalPrice: item.original_price,
          cost: 0,
          unit: "x" as const,
          icon: item.icon,
        })),
      );
    });
  }, []);

  const addUserItem = async (item: { name: string; originalPrice: number; icon: string }) => {
    const id = await insertLifeItem({
      name: item.name,
      originalPrice: item.originalPrice,
      icon: item.icon,
    });
    setUserItems((prev) => [
      ...prev,
      {
        id: id ?? undefined,
        name: item.name,
        originalPrice: item.originalPrice,
        cost: 0,
        unit: "x",
        icon: item.icon,
      },
    ]);
  };

  const lifeItem: {
    name: string;
    cost: number;
    unit: ItemUnit;
    icon: string;
  }[] = [
    {
      name: "% of your monthly salary",
      cost: v?.percentage ?? 0,
      unit: "%",
      icon: "Heart",
    },
    {
      name: "Days to save up",
      cost: v?.daysToSave ?? 0,
      unit: "days",
      icon: "Zap",
    },
    {
      name: "Yearly return if invested (7%)",
      cost: v?.investYears ?? 0,
      unit: "€",
      icon: "Home",
    },
    ...userItems.map((item) => ({
      name: item.name,
      cost: (v?.calculatedCost ?? 0) / item.originalPrice,
      unit: "x" as const,
      icon: item.icon,
    })),
  ];

  return <LifeItemContext value={{ lifeItem, addUserItem, userItems, setUserItems }}>{children}</LifeItemContext>;
};
