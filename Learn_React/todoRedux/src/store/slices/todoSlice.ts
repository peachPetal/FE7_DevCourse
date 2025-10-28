// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// // 초기 상태 타입 정의
// interface TodosState {
//   todos: Todo[];
// }

// // 초기 상태
// const initialState: TodosState = {
//   todos: [],
// };

// export const todosSlice = createSlice({
//   name: "todos",
//   initialState,
//   // 리듀서: 상태를 변경하는 함수들을 정의
//   // Redux Toolkit은 Immer를 내장하고 있어, state를 직접 수정하는 것처럼 코드를 작성해도
//   // 불변성을 유지하며 새로운 상태를 생성해 줍니다.
//   reducers: {
//     addTodo: (state, action: PayloadAction<string>) => {
//       const text = action.payload;
//       const newTodo: Todo = {
//         id: (
//           Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
//         ).toUpperCase(),
//         text,
//         completed: false,
//       };
//       state.todos.push(newTodo);
//     },
//     toggleTodo: (state, action: PayloadAction<string>) => {
//       const id = action.payload;
//       const todo = state.todos.find((todo) => todo.id === id);
//       if (todo) {
//         todo.completed = !todo.completed;
//       }
//     },
//     updateTodo: (
//       state,
//       action: PayloadAction<{ id: string; text: string }>
//     ) => {
//       const { id, text } = action.payload;
//       const todo = state.todos.find((todo) => todo.id === id);
//       if (todo) {
//         todo.text = text;
//       }
//     },
//     deleteTodo: (state, action: PayloadAction<string>) => {
//       const id = action.payload;
//       state.todos = state.todos.filter((todo) => todo.id !== id);
//     },
//   },
// });

// // 컴포넌트에서 사용할 액션 생성자(Action Creators) 내보내기
// export const { addTodo, toggleTodo, updateTodo, deleteTodo } =
//   todosSlice.actions;

// // 스토어에서 사용할 리듀서 내보내기
// export default todosSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  todos: Todo[];
} = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ text: string }>) => {
      const uuid = (
        Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
      ).toUpperCase();
      state.todos = [
        ...state.todos,
        {
          id: uuid,
          text: action.payload.text,
          completed: false,
        },
      ];
    },
    toggleTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (
      state,
      action: PayloadAction<{ id: string; text: string }>
    ) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
