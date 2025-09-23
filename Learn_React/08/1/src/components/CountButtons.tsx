import { useContext } from "react";
import { CounterContext } from "../contexts/counter/CounterContext";


export default function CountButtons() {
//   const { setCount, count } = useContext(CounterContext)!;
const { increment, decrement, reset } = useContext(CounterContext)!;
  return (
    <>
      {/* <button onClick={() => setCount((count) => count - 1)}>감소</button>
      <button onClick={() => setCount(0)}>리셋</button>
      <button onClick={() => setCount((count) => count + 1)}>증가</button> */}
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
    </>
  );
}