import { useState, useMemo } from "react";
import { CounterActionContext, CounterContext } from "./counterContext";

// ***Provider()
export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);
  // const providerObject = useMemo(() => ({count, increment, decrement, reset}), []);
  const memoProvider = useMemo(() => ({increment, decrement, reset}), []);
  return (
    <>
    <CounterActionContext value={memoProvider}>
      <CounterContext value={{count}}>
        {children}
      </CounterContext>
    </CounterActionContext>
    </>
  );
}
