import { createSlice } from "@reduxjs/toolkit";

const storageTasks = JSON.parse(localStorage.getItem("progressTask")) || [];

const initialState = {
  progressTask: storageTasks,
  filteredText: "",
};

const progressSlice = createSlice({
  name: "Progress",
  initialState,
  reducers: {
    sendToProgress: (state, action) => {
      state.progressTask.unshift(action.payload);

      localStorage.setItem("progressTask", JSON.stringify(state.progressTask));
    },

    deleteProgressTaskByName: (state, action) => {
      // we have todo in action.payload

      const filteredTask = state.progressTask.filter(
        (todo) => todo.name.toLowerCase() != action.payload.name.toLowerCase()
      );

      state.progressTask = [...filteredTask];
      localStorage.setItem("progressTask", JSON.stringify(state.progressTask));
    },
    setFilteredTextInProgress: (state, action) => {
      state.filteredText = action.payload;
    },
  },
});

export const {
  sendToProgress,
  deleteProgressTaskByName,
  setFilteredTextInProgress,
} = progressSlice.actions;
export const progressReducer = progressSlice.reducer;
