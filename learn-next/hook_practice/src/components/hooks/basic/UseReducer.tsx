import { useReducer } from "react";

type State = {
  count: number;
};

const initialState: State = { count: 0 };

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "set"; payload: number }
  | { type: "reset" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "set":
      return { count: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({type: "increment"})}>+1 증가</button>
      <button onClick={() => dispatch({type: "decrement"})}>-1 감소</button>
      <button onClick={() => dispatch({type: "set", payload: 10})}>10으로 설정</button>
      <button onClick={() => dispatch({type: "reset"})}>초기화</button>
    </>
  );
}
