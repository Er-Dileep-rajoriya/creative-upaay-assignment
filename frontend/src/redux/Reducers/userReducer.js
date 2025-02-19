import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const todoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;

      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});

export const { setUser } = todoSlice.actions;
export const userReducer = todoSlice.reducer;
