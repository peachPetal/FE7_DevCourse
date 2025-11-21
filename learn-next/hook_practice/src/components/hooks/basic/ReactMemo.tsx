import { useState } from "react";

function ChildA() {
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

export default function ReactMemo() {
  console.log("ReactMemo");
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>ReactMemo</h1>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment Count
      </button>
      <ChildA />
    </>
  );
}
