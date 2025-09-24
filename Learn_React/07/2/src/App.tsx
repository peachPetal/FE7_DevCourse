// const [상태함수, 액션(리듀서) 발생함수] = useReducer(리듀서함수, 초기값)

import { useReducer } from "react";
import Count from "./components/Count";
import Form from "./components/Form";
import { reducer } from "./reducer/countReducer"

// 리듀서 함수 -> 상태 업데이트 로직이 담겨 있는 함수
// 1개의 리턴 값이 있어야함
export default function App () {
  // countDispatch({type: "increment"})
  const [count, countDispatch] = useReducer(reducer, 0);
  return (
    <>
      <Count count={count} dispatch={countDispatch}/>
      {/* <h1>Count: {count}</h1>
      <button onClick={() => countDispatch({type: 'Increment'})}>Increment</button>
      <button onClick={() => countDispatch({type: 'Decrement'})}>Decrement</button>
      <button onClick={() => countDispatch({type: 'Reset'})}>Reset</button> */}

      <Form />
    </>
  );
}