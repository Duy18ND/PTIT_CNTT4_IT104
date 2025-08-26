import React, { useState } from 'react'

export default function EXERCISE06() {
  const [length, setLength] = useState("");

  return (
    <div>
      <textarea
        value={length}
        onChange={(e) => setLength(e.target.value)}
        rows={5}
        cols={50}
        placeholder="Nhập văn bản..."
      />
      <div>Số ký tự: {length.length}</div>
    </div>
  )
}
