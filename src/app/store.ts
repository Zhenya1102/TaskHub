import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "features/TodolistsList/model/tasks/tasksSlice";
import { todolistsSlice } from "features/TodolistsList/model/todolists/todolistsSlice";
import { appReducer } from "app/app.reducer";
import { authSlice } from "features/auth/model/auth.slice";

export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    todolists: todolistsSlice,
    app: appReducer,
    auth: authSlice,
  },
});

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// @ts-ignore
window.store = store;
