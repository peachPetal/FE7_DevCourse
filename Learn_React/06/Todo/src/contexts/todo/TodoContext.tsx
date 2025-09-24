// src/contexts/TodoContext.tsx

// import { createContext, useContext } from "react";
// import type { Todo } from "../../types/todo";

// // Context가 제공할 값의 타입 정의
// type TodoContext = {
//   todos: Todo[];
// }

// type TodoActionContext = {
//     handleAddTodo: (text: string) => void;
//   handleDeleteTodo: (id: number) => void;
//   handleToggleTodo: (id: number) => void;
//   handleEditTodo: (id: number, newText: string) => void;
// }

// // Context 생성
// export const TodoContext = createContext<TodoContext | null>(null);
// export const TodoActionContext = createContext<TodoActionContext | null>(null);

// // Context를 사용하기 위한 Custom Hook
// export function useTodoContext() {
//   const context = useContext(TodoContext);
//   if (!context) {
//     throw new Error("useTodoContext는 TodoProvider 내부에서 사용해야 합니다.");
//   }
//   return context;
// }

import { createContext } from "react";
import type { Todo } from "../../types/todo";

type TodoContext = {
  todos: Todo[];
};

type TodoActionContext = {
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
};

export const TodoContext = createContext<TodoContext | null>(null);
export const TodoActionContext = createContext<TodoActionContext | null>(null);