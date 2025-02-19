import { createSlice } from "@reduxjs/toolkit";

const storageTasks = JSON.parse(localStorage.getItem("doneTasks")) || [];

const initialState = {
  doneTasks: storageTasks,
  filteredText: "",
};
const doneSlice = createSlice({
  name: "Done",
  initialState,
  reducers: {
    setDoneTask: (state, action) => {
      state.doneTasks.unshift(action.payload);
      localStorage.setItem("doneTasks", JSON.stringify(state.doneTasks));
    },
    deleteFromDoneTask: (state, action) => {
      const filteredTask = state.doneTasks.filter(
        (todo) => todo.name.toLowerCase() != action.payload.name.toLowerCase()
      );
      state.doneTasks = [...filteredTask];
      localStorage.setItem("doneTasks", JSON.stringify(state.doneTasks));
    },
    setFilteredTextInDone: (state, action) => {
      state.filteredText = action.payload;
    },
  },
});

export const { setDoneTask, deleteFromDoneTask, setFilteredTextInDone } =
  doneSlice.actions;
export const doneTaskReducer = doneSlice.reducer;
