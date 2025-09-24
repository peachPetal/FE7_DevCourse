// import { create } from "zustand";
// import { devtools, subscribeWithSelector } from "zustand/middleware";
// import { immer } from "zustand/middleware/immer";

// type CounterStore = {
//     count: number;
//     increment: () => void;
//     decrement: () => void;
//     reset: () => void;
//     incrementByAmount: (value:number) => void;
// }

// use***Store
// export const useCounterStore = create<CounterStore>(
// (set) => ({
//     count: 0,
//     increment: () => set((state) => ({count : state.count + 1})),
//     decrement: () => set((state) => ({count : state.count - 1})),
//     reset: () => set({count: 0}),
//     incrementByAmount: (value) => set((state) => ({count : state.count + value})),
// }));

// combine > immer > persit > devtools > subscribe

// export const useCounterStore = create<CounterStore>()(
//     subscribeWithSelector(
//   devtools(immer((set) => ({
//     count: 0,
//     increment: () =>
//       set((state) => {
//         state.count += 1;
//       }),
//     decrement: () =>
//       set((state) => {
//         state.count -= 1;
//       }),
//     reset: () => set({count : 0}),
//     incrementByAmount: (value) =>
//       set((state) => {
//         state.count += value;
//       }),
//   })),{
//     trace: true,
//   }
// )));


// zustand
// setter
// const [count, setCount] = useState({ count: 0 });
import { create } from "zustand";
import {
  combine,
  createJSONStorage,
  devtools,
  persist,
  subscribeWithSelector,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementByAmount: (value: number) => void;
};

// immer(콜백함수)
// combine -> immer -> persist -> devtools -> subscribeWithSelector
export const useCounterStore = create<CounterStore>()(
  subscribeWithSelector(
    devtools(
      persist(
        immer(
          combine({ count: 0 }, (set) => ({
            increment: () =>
              set((state) => {
                state.count += 1;
              }),
            decrement: () =>
              set((state) => {
                state.count -= 1;
              }),
            reset: () => set({ count: 0 }),
            incrementByAmount: (value) =>
              set((state) => {
                state.count += value;
              }),
          }))
        ),
        {
          name: "counter-store",
          storage: createJSONStorage(() => sessionStorage),
        }
      ),
      {
        trace: true,
      }
    )
  )
);
