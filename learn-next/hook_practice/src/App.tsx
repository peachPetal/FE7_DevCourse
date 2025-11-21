/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactMemo from "./components/hooks/basic/ReactMemo";
import UseCallback from "./components/hooks/basic/UseCallback";
import UseDeferredValue from "./components/hooks/basic/UseDeferredValue";
import UseEffect from "./components/hooks/basic/UseEffect";
import UseId from "./components/hooks/basic/UseId";
import UseLayoutEffect from "./components/hooks/basic/UseLayoutEffect";
import UseMemo from "./components/hooks/basic/UseMemo";
import UseOptimistic from "./components/hooks/basic/UseOptimistic";
import UseReducer from "./components/hooks/basic/UseReducer";
import UseState from "./components/hooks/basic/UseState";
import UseTransition from "./components/hooks/basic/UseTransition";
import UseTransition2 from "./components/hooks/basic/UseTransition2";
import ShoppingCart from "./components/hooks/higher/cart/ShoppingCart";
import WeatherCard from "./components/hooks/higher/weather/WeatherCard";
import Stopwatch from "./components/hooks/pratice/useEffect/StopWatcher";
import ScrollComparison from "./components/hooks/pratice/useLayoutEffect/ScrollComparison";
import UseReducerPracticer from "./components/hooks/pratice/useReducer/UseReducerPractice";
import UseStatePractice from "./components/hooks/pratice/useState/UseStatePractice";
import WithoutTransitionSearch from "./components/hooks/pratice/useTransition/WithoutTransitionSearch";

export default function App() {
  return (
    <>
      {/* <UseId /> */}
      {/* <UseState /> */}
      {/* <UseStatePractice /> */}
      {/* <UseReducer /> */}
      {/* <UseReducerPracticer /> */}
      {/* <ShoppingCart /> */}
      {/* <UseEffect /> */}
      {/* <UseLayoutEffect /> */}
      <Stopwatch />
      {/* <ScrollComparison /> */}
      {/* <WeatherCard /> */}
      {/* <ReactMemo /> */}
      {/* <UseCallback /> */}
      {/* <UseMemo /> */}
      {/* <UseDeferredValue /> */}
      {/* <UseTransition /> */}
      {/* <UseTransition2 /> */}
      {/* <WithoutTransitionSearch /> */}
      {/* <UseOptimistic /> */}
    </>
  );
}
