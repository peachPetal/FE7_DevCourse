import { useConfigureStore } from "../stores/configureStore";
import { useCounterStore } from "../stores/counterStore";

export default function CountButtons() {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  const incrementByAmount = useCounterStore((state) => state.incrementByAmount);
  // const{increment, decrement, reset, incrementByAmount} = useCounterStore();
  const setIsDark = useConfigureStore((state) => state.setIsDark);
  const setIsLight = useConfigureStore((state) => state.setIsLight);
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
      <button onClick={() => incrementByAmount(10)}>10증가</button>
      <br />
      <button onClick={setIsDark}>다크모드</button>
      <button onClick={setIsLight}>라이트모드</button>
    </>
  );
}
