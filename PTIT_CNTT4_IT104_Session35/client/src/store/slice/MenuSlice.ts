import { createSlice } from "@reduxjs/toolkit";

type MenuState = {
  collapsed: boolean;
};

const initialState: MenuState = {
  collapsed: false,
};

const menuSlice = createSlice({
  name: "EXE05",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.collapsed = !state.collapsed;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;