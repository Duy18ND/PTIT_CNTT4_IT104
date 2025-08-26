import React, { useState } from "react";

export default function CheckboxList() {
  const [selected, setSelected] = useState([]);

  const options = ["Apple", "Banana", "Orange", "Mango"];

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Chọn trái cây:</h2>
      {options.map((option) => (
        <label key={option} style={{ display: "block", margin: "5px 0" }}>
          <input
            type="checkbox"
            value={option}
            checked={selected.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}

      <p>Trái cây đã chọn: {selected.join(", ") || "Chưa chọn"}</p>
    </div>
  );
}
