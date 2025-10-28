// src/stores/todoStore.ts

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"; // 1. persist 미들웨어 import
import { Todo } from "../types/todo";

interface TodoState {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, text: string) => void;
}

export const useTodoStore = create(
  persist<TodoState>(
    (set, get) => ({
      todos: [],

      addTodo: (text) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: Date.now(),
              text,
              completed: false,
            },
          ],
        })),

      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),

      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),

      updateTodo: (id, text) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, text } : todo
          ),
        })),

        // resetIfTodo: () => {
        //     // todo 3개 이상일 때만 초기화
        //     if(get().todos.length >= 3){
        //         set((state) => ({state.todos = [];}));
        //     }
        // },
    }),
    {
      name: "todo-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
