import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({ type: "REGISTER", payload: form });
        alert("Đăng ký thành công!");
        navigate("/login");
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <span className="title">Register</span>

                <label htmlFor="username" className="label">
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    required
                    className="input"
                />

                <label htmlFor="email" className="label">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="input"
                />

                <label htmlFor="password" className="label">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="input"
                />

                <button type="submit" className="submit">
                    Register
                </button>
            </form>
        </>
    );
}
