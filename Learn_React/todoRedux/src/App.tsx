// import Todo from "./components/Todo";
// import TodoProvider from "./contexts/todos/TodoProvider";

// export default function App() {
//   return (
//     <>
//       <TodoProvider>
//         <Todo />
//       </TodoProvider>
//     </>
//   );
// }

import { Provider } from "react-redux";
import Todo from "./components/Todo";
import { store } from "./store/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Todo />
      </Provider>
    </>
  );
}