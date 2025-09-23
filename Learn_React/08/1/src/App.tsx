// import { createContext, useState } from "react";
// import Page from "./components/Page";
// import CountOutsideDisplay from "./components/CountOutsideDisplay";
// import CounterProvider from "./contexts/counter/CounterProvider";

// type CounterContextType = {
//   count: number;
//   increment: () => void;
//   decrement: () => void;
//   reset: () => void;
//   // setCount: React.Dispatch<React.SetStateAction<number>>;
// };

// export const CounterContext = createContext<CounterContextType>({
//   count: 0,
//   setCount: () => {},
// });
// export const CounterContext = createContext<CounterContextType | null>(null);
// null도 가능하나 전달받는 컴포넌트에서 !(null 아님을 보증)해야함 

// export default function App() {
//   // const [count, setCount] = useState(0);
//   // const increment = () => setCount((count) => count + 1);
//   // const decrement = () => setCount((count) => count - 1);
//   // const reset = () => setCount(0);
//   // return (
//   //   <>
//   //     {/* <CounterContext value={{ count: count, setCount: setCount }}> */}
//   //     <CounterContext value={{ count, increment, decrement, reset }}>
//   //       <Page />
//   //       <CountOutsideDisplay />
//   //     </CounterContext>
//   //   </>
//   // );
// }

// export default function App () {
//   return (
//     <>
//       <CounterProvider>
//         <Page/>
//         <CountOutsideDisplay/>
//       </CounterProvider>
//     </>
//   );
// }

import { createContext, useState } from "react";
import Page from "./components/Page";
import CountOutsideDisplay from "./components/CountOutsideDisplay";

type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const CounterContext = createContext<CounterContextType>({
  count: 0,
  increment: () => {},
  decrement: () => {},
  reset: () => {},
});

type ConfigContextType = {
  theme: string;
  setDarkMode: () => void;
  setLightMode: () => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const ConfigContext = createContext<ConfigContextType | null>(null);

export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);

  const [theme, setTheme] = useState("dark");
  const setDarkMode = () => setTheme("dark");
  const setLightMode = () => setTheme("light");
  return (
    <>
      <ConfigContext
        value={{
          theme: theme,
          setDarkMode: setDarkMode,
          setLightMode: setLightMode,
        }}
      >
        <CounterContext
          value={{
            count: count,
            increment: increment,
            decrement: decrement,
            reset: reset,
          }}
        >
          <Page />
          <CountOutsideDisplay />
        </CounterContext>
      </ConfigContext>
    </>
  );
}
