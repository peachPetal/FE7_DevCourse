/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

function ChildA({ increment }: { increment: () => void }) {
  console.log("ChildA");
  return (
    <>
      <h1>ChildA</h1>
      <ChildB />
    </>
  );
}

function ChildB() {
  console.log("ChildB");
  return (
    <>
      <h1>ChildB</h1>
      <ChildC />
    </>
  );
}

function ChildC() {
  console.log("ChildC");
  return (
    <>
      <h1>ChildC</h1>
    </>
  );
}

export default function UseCallback() {
  console.log("UseCallback");
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <h1>UseCallback</h1>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment Count
      </button>
      <ChildA increment={increment} />
    </>
  );
}
