// 고유 ID를 생성하는 useId 훅 예제

import { useId } from "react";

// 서버와 클라이언트에서 동일하게 생성되므로, SSR 환경에서도 안전하게 사용 가능함
export default function UseId() {
  const id = useId();
  return (
    <>
      <h1>UseId Component</h1>
      return (
      <>
        <label htmlFor={id}>Enter your name:</label>
        <input type="text" id={id}/>
      </>
      );
    </>
  );
}
