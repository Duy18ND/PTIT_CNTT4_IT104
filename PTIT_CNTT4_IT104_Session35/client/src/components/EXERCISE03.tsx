import type { RootState, AppDispatch } from "../store/store";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { themeClick } from "../store/slice/ThemeSlice";

export default function EXERCISE03() {
    const result = useSelector((data: RootState) => data.EXE03.theme);
    const dispatch = useDispatch<AppDispatch>();
  return (
    <div style={{width: "300px", height: "300px", backgroundColor: `${result}`}}>
      <button onClick={() => dispatch(themeClick())}>{result === "black" ? "light" : "black"}</button>
    </div>
  )
}
