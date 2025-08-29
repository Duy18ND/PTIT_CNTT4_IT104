import React, { useEffect, useState } from 'react'

export default function EXERCISE04() {
    const [title, setTitle] = useState("");
    useEffect(() => {
        document.title = title;
    },[title]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
  return (
    <div>
      <div>
        <h2>Chào mừng bạn đến với trang chúng tôi</h2>
        <input type="text" placeholder='Món ăn ngon' onChange={handleChange}/>
        <span>Tiêu đề sẽ thay đổi khi bạn nhập tên vào trường input trên</span>
      </div>
    </div>
  )
}
