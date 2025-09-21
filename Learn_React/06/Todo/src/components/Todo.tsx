// 상태 관리 및 함수 정의
import { useState } from "react";
import type { Todo } from "../types/todo";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // 할 일 추가 함수
  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  // 할 일 삭제 함수
  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // 할 일 완료 상태 토글 함수
  const handleToggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 할 일 수정 함수
  const handleEditTodo = (id: number, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="todo">
      <TodoHeader />
      {/* 할 일 등록 */}
      <TodoEditor onAddTodo={handleAddTodo} />
      {/* 할 일 목록 */}
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
        onEditTodo={handleEditTodo}
      />
    </div>
  );
}