import React, {useState} from 'react'

export default function EXERCISE01() {
  const [name, setName] = useState("Đoàn Mạnh Duy");

  return (
    <div>
      <h2>Họ và tên: {name}</h2>
    </div>
  )
}
