// 상태 관리 
// useState, useReducer

// useState 
// 직관적이고 문법이 쉬움
// 상태 업데이트 로직이 컴포넌트 내부에 흩어지기 쉬움

// useReducer
// 상태 업데이트 로직에 한 곳에 몰려있음
// 문법이 어려움
// 복잡한 상태 관리를 할 때 사용

// import { useState } from "react";

// export default function App () {
//   const [count, setCount] = useState(0);
//   const handleIncrement = () => {
//     setCount(10);
//   }
//   return (
//     <>
//       <h1>App Component</h1>
//       <h1>Count: {count}</h1>
//       {/* <button onClick={() => setCount(100)}>업데이트(인라인)</button> */}
//       <button onClick={handleIncrement}>업데이트(이벤트핸들러)</button> 
//       {/* 자식 컴포넌트 사용 */}
//     </>
//   );
// }

export default function App () {
  return (
    <>
      <h1>App Component</h1>
    </>
  );
}