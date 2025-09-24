// import { useContext } from "react";
// import TodoListEmpty from "./TodoListEmpty";
// import TodoListItem from "./TodoListItem";
// import { TodoContext } from "../contexts/todos/todoContext";

// export default function TodoList() {
//   const { todos } = useContext(TodoContext)!;
//   return (
//     <>
//       <ul className="todo__list">
//         {/* 할 일 목록이 없을 때  */}
//         {todos.length === 0 && <TodoListEmpty />}
//         {/* 할 일 목록이 있을 때 */}
//         {todos.map((todo) => (
//           <TodoListItem key={todo.id} todo={todo} />
//         ))}
//       </ul>
//     </>
//   );
// }

import TodoListEmpty from "./TodoListEmpty";
import TodoListItem from "./TodoListItem";
import { useAppSelector } from "../store/hooks";

export default function TodoList() {
  // useAppSelector를 통해 스토어의 상태(state)에 접근
  const todos = useAppSelector((state) => state.todos.todos);

  return (
    <>
      <ul className="todo__list">
        {todos.length === 0 && <TodoListEmpty />}
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}