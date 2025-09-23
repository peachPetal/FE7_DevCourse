import { useState } from "react";
import Child from "./components/Child";
import A from "./components/A";

// 메모이제이션
// 계산한 결과를 저장해 두었다가
// 같은 입력이 들어오면 재사용

// 컴포넌트 메모이제이션
// props가 변경되지 않으면 리렌더링이 되지 않음

export default function App () {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  console.log("App Rerendering");
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      {/* <h1>Count: {count}</h1>
      <button onClick={() => {setCount((count) => count + 1);}}>증가</button>
      <Child /> */}
      <A count2={count2}/>
    </>
  );
}

// react.memo 컴포넌트
// useCallback 함수
// useMemo 밸류