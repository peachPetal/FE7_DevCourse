// 리액트 변수 키워드

import { useState } from "react";

// useState()
export default function App () {
  const [count, setCount] = useState<number>(0);
  const handleIncrement = () => {
    // setCount(count + 1);
    // setCount(10);
    // setCount((prev) => prev + 1);
    // setCount((prevCount) => prevCount + 1);
    setCount((count) => count + 1);
  };
  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={handleIncrement}>증가</button>
    </>
  );
}