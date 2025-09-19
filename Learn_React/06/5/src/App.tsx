import { useState } from "react";
import Count from "./components/Count";
import CountOutside from "./components/CountOutside";

export default function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <Count count={count} setCount={setCount} />
      <CountOutside count={count} />
    </div>
  );
}
