import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./Reducers/TodoReducer";
import { progressReducer } from "./Reducers/progressReducer";
import { doneTaskReducer } from "./Reducers/doneTaskReducer";
import { userReducer } from "./Reducers/userReducer";

export const store = configureStore({
  reducer: {
    todoReducer,
    progressReducer,
    doneTaskReducer,
    userReducer,
  },
});
