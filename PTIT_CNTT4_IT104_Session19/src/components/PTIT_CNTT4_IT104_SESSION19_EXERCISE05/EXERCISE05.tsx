import React, { useState } from 'react'

const quotes: string[] = [
    "Học, học nữa, học mãi.",
    "Thất bại là mẹ thành công.",
    "Không gì là không thể.",
    "Kiến tha lâu đầy tổ.",
    "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau."
]

export default function EXERCISE05() {
    const [quote, setQuote] = useState(quotes[0]);

    const handleChange = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    }

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Câu nói truyền cảm hứng:</h2>
            <p style={{ fontStyle: "italic", fontSize: "18px" }}>{quote}</p>
            <button onClick={handleChange}>Lấy câu nói mới</button>
        </div>
    )
}
