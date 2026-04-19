import React, { useEffect, useState } from "react";
import { RealCostContext } from "./RealCostContext";
import { fetchProfile, updateProfile } from "../hooks/supabase.api";

export const RealCostProvider = ({ children }: { children: React.ReactNode }) => {
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

  useEffect(() => {
    fetchProfile().then((data) => {
      if (data)
        setValue((prev) => ({
          ...prev,
          monthly: data.monthly,
          hourly: data.hourly,
        }));
    });
  }, []);

  const handleSetValue: typeof setValue = (update) => {
    setValue((prev) => {
      const next = typeof update === "function" ? update(prev) : update;
      if (next.monthly !== prev.monthly || next.hourly !== prev.hourly) {
        updateProfile(next.monthly, next.hourly);
      }
      return next;
    });
  };

  return <RealCostContext value={{ value, setValue: handleSetValue }}>{children}</RealCostContext>;
};
