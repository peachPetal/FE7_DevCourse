import type { ActionDispatch } from "react";
import type { CountAction } from "../types/reducer";

export default function Count({
  count,
  dispatch,
}: {
  count: number;
  dispatch: ActionDispatch<[action: CountAction]>;
}) {
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => dispatch({ type: "RESET" })}>0</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
    </>
  );
}