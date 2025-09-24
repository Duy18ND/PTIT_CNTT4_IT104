import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../store/slice/ViewModeSlice";
import type { AppDispatch , RootState} from "../store/store";

export default function EXERCISE04() {
  const dispatch = useDispatch<AppDispatch>();
  const mode = useSelector((state: RootState) => state.EXE04.mode);

  const data = [1, 2, 3, 4];

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => dispatch(toggleMode())}>
        {mode === "list" ? "List mode" : "Grid mode"}
      </button>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: mode === "list" ? "column" : "row",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {data.map((num) => (
          <div
            key={num}
            style={{
              backgroundColor: "tomato",
              color: "black",
              fontSize: "20px",
              textAlign: "center",
              width: mode === "list" ? "100%" : "100px",
              padding: "20px",
            }}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}