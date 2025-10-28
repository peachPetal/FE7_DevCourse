// import TodoListItem from "./TodoListItem";

// export default function TodoList() {
//   return (
//     <>
//       <ul className="todo__list">
//         {/* 할 일 목록이 없을 때  */}
//         {/* <TodoListEmpty /> */}
//         {/* 할 일 목록이 있을 때 */}
//         <TodoListItem />
//       </ul>
//     </>
//   );
// }

// src/components/TodoList.tsx

import { useTodoStore } from "../stores/todoStore";
import TodoListEmpty from "./TodoListEmpty";
import TodoListItem from "./TodoListItem";

export default function TodoList() {
  const { todos } = useTodoStore(); // 스토어에서 상태 가져오기

  return (
    <ul className="todo__list">
      {todos.length === 0 ? (
        <TodoListEmpty />
      ) : (
        // 각 todo 항목을 props로 전달
        todos.map((todo) => <TodoListItem key={todo.id} todo={todo} />)
      )}
    </ul>
  );
}