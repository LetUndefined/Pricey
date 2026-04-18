import { createContext } from "react";
import { type LifeItemContextType } from "../interface";

export const LifeItemContext = createContext<LifeItemContextType | null>(null);
