import { createSlice } from "@reduxjs/toolkit";

const initialCounter = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "EXE01",
  initialState: initialCounter,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0; 
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
