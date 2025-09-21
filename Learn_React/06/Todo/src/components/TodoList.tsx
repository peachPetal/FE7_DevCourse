// 조건부 랜더링
import { Todo } from "../types/todo";
import TodoListEmpty from "./TodoListEmpty";
import TodoListItem from "./TodoListItem";

type TodoListProps = {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
  onEditTodo: (id: number, newText: string) => void;
};

export default function TodoList({
  todos,
  onDeleteTodo,
  onToggleTodo,
  onEditTodo,
}: TodoListProps) {
  return (
    <ul className="todo__list">
      {todos.length === 0 ? (
        // 할 일 목록이 없을 때
        <TodoListEmpty />
      ) : (
        // 할 일 목록이 있을 때
        todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
            onEditTodo={onEditTodo}
          />
        ))
      )}
    </ul>
  );
}