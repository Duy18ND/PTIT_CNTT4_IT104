import React, { useState } from 'react'

export default function EXERCISE04() {
  const [text, setText] = useState({
    title: "Tiêu đề văn bản",
    isFount: true   
  });

  const handleClick = () => {
    setText((prev) => ({
      ...prev,           
      isFount: !prev.isFount 
    }));
  };

  return (
    <div>
      <button onClick={handleClick}>
        {text.isFount ? "Ẩn" : "Hiện"}
      </button>

      {text.isFount && <h2>{text.title}</h2>}
    </div>
  )
}
