// // 조건부 랜더링
// import { Todo } from "../types/todo";
// import TodoListEmpty from "./TodoListEmpty";
// import TodoListItem from "./TodoListItem";

// type TodoListProps = {
//   todos: Todo[];
//   onDeleteTodo: (id: number) => void;
//   onToggleTodo: (id: number) => void;
//   onEditTodo: (id: number, newText: string) => void;
// };

// export default function TodoList({
//   todos,
//   onDeleteTodo,
//   onToggleTodo,
//   onEditTodo,
// }: TodoListProps) {
//   return (
//     <ul className="todo__list">
//       {todos.length === 0 ? (
//         // 할 일 목록이 없을 때
//         <TodoListEmpty />
//       ) : (
//         // 할 일 목록이 있을 때
//         todos.map((todo) => (
//           <TodoListItem
//             key={todo.id}
//             todo={todo}
//             onDeleteTodo={onDeleteTodo}
//             onToggleTodo={onToggleTodo}
//             onEditTodo={onEditTodo}
//           />
//         ))
//       )}
//     </ul>
//   );
// }

// TodoList.tsx

import { useTodoContext } from "../contexts/todo/TodoContext";
import TodoListEmpty from "./TodoListEmpty";
import TodoListItem from "./TodoListItem";

export default function TodoList() {
  // Context로부터 직접 todos 배열을 가져옵니다.
  const { todos } = useTodoContext();

  return (
    <ul className="todo__list">
      {todos.length === 0 ? (
        <TodoListEmpty />
      ) : (
        todos.map((todo) => (
          // key와 todo 객체만 prop으로 전달합니다.
          <TodoListItem key={todo.id} todo={todo} />
        ))
      )}
    </ul>
  );
}