import { createSlice } from "@reduxjs/toolkit";

interface RandomState {
  numbers: number[];
}

const initialRandom: RandomState = {
  numbers: [],
};

export const randomSlice = createSlice({
  name: "EXE02",
  initialState: initialRandom,
  reducers: {
    random: (state) => {
      const newNumber = Math.floor(Math.random() * 100) + 1;
      state.numbers.push(newNumber); 
    },
  },
});

export const { random } = randomSlice.actions;
export default randomSlice.reducer;
