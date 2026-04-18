import { createContext } from "react";
import { type RealCostContextType } from "../interface";

export const RealCostContext = createContext<RealCostContextType | null>(null);
