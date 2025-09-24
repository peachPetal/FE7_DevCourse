import { createContext } from "react";

type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  // setCount: React.Dispatch<React.SetStateAction<number>>;
};

export const CounterContext = createContext<CounterContextType | null>(null);