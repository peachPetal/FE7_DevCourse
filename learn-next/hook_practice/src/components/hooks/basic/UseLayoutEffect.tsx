import { useEffect, useLayoutEffect, useState } from "react";

export default function UseLayoutEffect() {
  const [count, setCount] = useState(0);
  const now = performance.now();
  while (performance.now() - now < 200) {
    // Artificial delay -- do nothing
  }

  useLayoutEffect(() => {
    if (count === 0) setCount(10);
  }, [count]);

  return (
    <>
      <h1>Count: {count} </h1>
    </>
  );
}
