import React, { useState } from 'react'
import '../PTIT_CNTT4_IT104_SESSION19_EXERCISE04/EXERCISE04.css'
export default function EXERCISE04() {
    const [data, setData] = useState({ name: "", email: "" });
    const [error, setError] = useState({ name: "", email: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (value === "") {
            setError({ ...error, [name]: `${name} không được bỏ trống!` });
        } else {
            setError({ ...error, [name]: "" });
        }

       /*  if (value !== "" && name === "email" && value.includes("@") && value.indexOf("@") != 0) {
            setError({ ...error, email: "" });
        } else {
            setError({ ...error, email: `Email Không đúng định dạng` });
        } */
        setData({ ...data, [name]: value });
    }
    return (
        <div>
            <div className='container04'>
                <h2>Thông tin đăng nhập</h2>
                <div className='form04'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Đoàn Văn A' onChange={handleChange} name="name"/>
                    <p style={{ color: "red" }}>{error.name}</p>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='DVA@email.com' onChange={handleChange} name="email"/>
                    <p style={{ color: "red" }}>{error.email}</p>
                </div>
                <button>Đăng nhập</button>
            </div>
        </div>
    )
}
