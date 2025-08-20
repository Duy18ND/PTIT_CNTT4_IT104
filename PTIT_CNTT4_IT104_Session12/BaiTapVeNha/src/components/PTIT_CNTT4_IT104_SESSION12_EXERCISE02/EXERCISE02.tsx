import React from 'react'

export default function EXERCISE02() {
  const a: number = 5;
  const b: number = 10;

  return (
    <div>
      <h2>Danh sách kết quả</h2>
      <ul>
        <li>{a} + {b} = {a + b}</li>
        <li>{a} - {b} = {a - b}</li>
        <li>{a} * {b} = {a * b}</li>
        <li>{a} / {b} = {a / b}</li>
      </ul>
    </div>
  )
}
