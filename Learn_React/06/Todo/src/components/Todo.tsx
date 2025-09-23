// Todo.tsx

import { TodoProvider } from "../contexts/todo/TodoProvider"; // 경로 수정
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  return (
    <TodoProvider>
      <div className="todo">
        <TodoHeader />
        <TodoEditor />
        <TodoList />
      </div>
    </TodoProvider>
  );
}