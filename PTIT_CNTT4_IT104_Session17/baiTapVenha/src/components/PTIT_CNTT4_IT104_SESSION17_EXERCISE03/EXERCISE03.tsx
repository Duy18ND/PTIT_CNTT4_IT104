import React, { useState } from 'react'

export default function EXERCISE03() {
    const [color, setColor] = useState('black');
    const handleClick = () => {
        setColor((prev) => (prev === "black" ? "red" : "black"));
    }
    return (
        <div>
            <h3 style={{color: color }}>Tiêu đề văn bản</h3>
            <button onClick={handleClick}>Thay đổi màu</button>
        </div>
    )
}
