import type {CountAction, CountState} from "../types/reducer"
export function reducer(state: CountState, action: CountAction) {
  switch(action.type){
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return 0;
    default:
      return state;
  }
}
