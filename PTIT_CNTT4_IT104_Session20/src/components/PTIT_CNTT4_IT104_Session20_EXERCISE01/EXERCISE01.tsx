import React, { useState } from 'react'

export default function EXERCISE01() {
  const [checkIn, setCheckIn] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckIn(e.target.value);
  }
  return (
    <div>
      <div>
        <h2>Kiểm tra độ dài chuỗi nhập vào</h2>
        <input type="text" placeholder='Nhập chuỗi bất kỳ'onChange={handleChange}/>
        
       {checkIn.length > 5 && (
        <div style={{color: "red"}}>Chuỗi nhập vào dài hơn 5 ký tự</div>
       )}
      </div>
    </div>
  )
}
