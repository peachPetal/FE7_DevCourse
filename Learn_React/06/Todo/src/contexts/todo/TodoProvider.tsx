// import { PropsWithChildren, useState } from "react";
// import { TodoContext, TodoContextValue } from "./TodoContext";
// import type { Todo } from "../../types/todo";

// // 상태와 로직을 포함하는 Provider 컴포넌트
// export function TodoProvider({ children }: PropsWithChildren) {
//   const [todos, setTodos] = useState<Todo[]>([]);

//   // 할 일 추가 함수
//   const handleAddTodo = (text: string) => {
//     const newTodo: Todo = {
//       id: Date.now(),
//       text,
//       completed: false,
//     };
//     setTodos((prevTodos) => [newTodo, ...prevTodos]);
//   };

//   // 할 일 삭제 함수
//   const handleDeleteTodo = (id: number) => {
//     setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
//   };

//   // 할 일 완료 상태 토글 함수
//   const handleToggleTodo = (id: number) => {
//     setTodos((prevTodos) =>
//       prevTodos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   // 할 일 수정 함수
//   const handleEditTodo = (id: number, newText: string) => {
//     setTodos((prevTodos) =>
//       prevTodos.map((todo) =>
//         todo.id === id ? { ...todo, text: newText } : todo
//       )
//     );
//   };

//   // Provider를 통해 전달할 value 객체
//   const value: TodoContextValue = {
//     todos,
//     handleAddTodo,
//     handleDeleteTodo,
//     handleToggleTodo,
//     handleEditTodo,
//   };

//   return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
// }

// src/providers/TodoProvider.tsx

// import React, { useMemo, useState } from "react"; // useCallback, useMemo 추가
// import { TodoContext, TodoActionContext } from "./TodoContext";
// import type { Todo } from "../../types/todo";

// export function TodoProvider({ children }: {children: React.ReactNode}) {
//   const [todos, setTodos] = useState<Todo[]>([]);

//   // 1. useCallback으로 함수들의 참조를 고정합니다.
//   // setTodos는 React가 참조 안정성을 보장하므로 의존성 배열에 넣지 않아도 됩니다.
//   const handleAddTodo = (text: string) => {
//     const newTodo: Todo = {
//       id: Date.now(),
//       text,
//       completed: false,
//     };
//     setTodos((prevTodos) => [newTodo, ...prevTodos]);
//   }; // 의존성 배열이 비어있으므로 컴포넌트가 처음 마운트될 때 한 번만 생성됩니다.

//   const handleDeleteTodo = (id: number) => {
//     setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
//   };

//   const handleToggleTodo = (id: number) => {
//     setTodos((prevTodos) =>
//       prevTodos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const handleEditTodo = (id: number, newText: string) => {
//     setTodos((prevTodos) =>
//       prevTodos.map((todo) =>
//         todo.id === id ? { ...todo, text: newText } : todo
//       )
//     );
//   };

//   const memoiaztion = useMemo(() => ({
//     handleAddTodo,
//     handleDeleteTodo,
//     handleEditTodo,
//     handleToggleTodo
//   }), []);

//   return <>
//     <TodoActionContext value={memoiaztion}>
//         <TodoContext.Provider value={{todos}}>
//             {children}
//         </TodoContext.Provider>;
//     </TodoActionContext>
//   </>
// }

import { useMemo, useState } from "react";
import { TodoActionContext, TodoContext } from "./TodoContext";
import type { Todo } from "../../types/todo";

export default function TodoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    const uuid = (
      Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
    ).toUpperCase();
    setTodos((todos) => [
      ...todos,
      {
        id: uuid,
        text,
        completed: false,
      },
    ]);
  };
  const toggleTodo = (id: string) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const updateTodo = (id: string, text: string) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text: text } : todo))
    );
  };
  const deleteTodo = (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  // const [상태변수, 디스패치(액션발생함수, 리듀서발생함수)] = useReducer(reducer, 0)
  const memoiaztion = useMemo(
    () => ({
      addTodo,
      toggleTodo,
      updateTodo,
      deleteTodo,
    }),
    []
  );
  return (
    <>
      <TodoActionContext value={memoiaztion}>
        <TodoContext value={{ todos }}>{children}</TodoContext>
      </TodoActionContext>
    </>
  );
}
