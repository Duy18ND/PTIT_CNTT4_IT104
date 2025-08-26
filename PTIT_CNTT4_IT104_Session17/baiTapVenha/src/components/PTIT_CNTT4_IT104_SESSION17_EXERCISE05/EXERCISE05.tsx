import React, { useState } from "react";

export default function Form() {
    const [value, setValue] = useState("");

    return (
        <div style={{ padding: 20 }}>
            <h2>Form Input</h2>
            <input
                type="text"
                placeholder="Nhập gì đó..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <p>Giá trị hiện tại: {value}</p>
        </div>
    );
}
