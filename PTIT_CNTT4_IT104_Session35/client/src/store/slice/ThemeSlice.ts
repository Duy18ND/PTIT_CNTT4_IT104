import { createSlice } from "@reduxjs/toolkit"

const initialTheme = {
    theme: "black"
}
export const ThemeSlice = createSlice({
    name: "EXE03",
    initialState: initialTheme,
    reducers: {
        themeClick: (state) => {
          state.theme = state.theme === "black" ? "white" : "black"   
        }
    }
})
export const {themeClick} = ThemeSlice.actions;
export default ThemeSlice.reducer;