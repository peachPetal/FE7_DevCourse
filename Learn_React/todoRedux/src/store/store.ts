import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./slices/todoSlice";

export const store = configureStore({
  reducer: {
    // 'todos'라는 이름으로 todosSlice의 리듀서를 등록
    todos: todosSlice,
  },
});

// RootState와 AppDispatch 타입을 정의하여 전체 앱에서 재사용
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;