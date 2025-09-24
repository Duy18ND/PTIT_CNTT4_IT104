import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { random } from "../store/slice/RandomSlice";

export default function EXERCISE02() {
  const numbers = useSelector((state: RootState) => state.EXE02.numbers);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>List numbers:</h1>
      <h1>[{numbers.join(", ")}]</h1>
      <button onClick={() => dispatch(random())}>Random</button>
    </div>
  );
}
