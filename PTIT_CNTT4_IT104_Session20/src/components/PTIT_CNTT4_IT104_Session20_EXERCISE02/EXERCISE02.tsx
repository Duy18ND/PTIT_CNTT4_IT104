import React, { useState } from 'react'
import './EXERCISE02.css'
type User = {
    name: string,
    email: string,
    isLogin: boolean
}
export default function EXERCISE02() {
    const [data, setData] = useState<User>({ name: "", email: "", isLogin: false });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setData((prev) => ({
            ...prev,
            [name]: value,
            isLogin: false
        } as User));
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setData((prev) => ({
            ...prev,
            isLogin: true
        }))
    }
    return (
        <div className='container02'>
            <div className='container_User'>
                <h2>Thông tin người dùng</h2>
                <form onSubmit={handleSubmit} className="form02">
                    <input type="text" placeholder='abc123' onChange={handleChange} value={data.name} name='name' />
                    <input type="email" placeholder='abc@gmail.com' onChange={handleChange} value={data.email} name='email' />
                    <div className="btn02">
                        <button>Submit</button>
                    </div>
                </form>
                {data.isLogin && (
                    <div className="container_Info03">
                        <p>Name: {data.name}</p>
                        <p>Email: {data.email}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
