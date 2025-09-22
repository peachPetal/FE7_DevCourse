// useEffect 훅
// 컴포넌트의 사이드 이펙트를 처리하기 위한 훅
// 데이터 가져오기, DOM 조작, 이벤트 등록/해제, 타이머 설정/해제
// 실제 렌더링을 위한 동작을 제외한, 모든 나머지 코드들을 사이드 이펙트

import { useEffect, useState } from "react";
import Interval from "./components/Interval";

export default function App () {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // 사이드 이펙트를 처리하기 위한 코드를 작성
    console.log("App 컴포넌트 렌더링");

    // 컴포넌트가 삭제될 때 호출되는 함수
    return () => {

    };

    // 컴포넌트가 생성될 때만 코드를 실행한다.
  }, []);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      {count === 0 && <Interval />}
    </>
  );
}