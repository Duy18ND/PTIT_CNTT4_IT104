import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../EXERCISE07/Login.css";

export default function EXERCISE08() {
  const registeredUser = useSelector((state: any) => state.auth?.user);
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    if (registeredUser?.email && registeredUser?.password) {
      setForm({
        email: registeredUser.email,
        password: registeredUser.password,
      });
    }
  }, [registeredUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "LOGIN", payload: form });
    console.log(`Đăng nhập thành công:
        email: ${form.email}
        password: ${form.password}
        `);
        
  };

  return (
    <form className="form" onSubmit={handleLogin}>
      <div className="flex-column">
        <label>Email </label>
      </div>
      <div className="inputForm">
        <input
          type="text"
          name="email"
          className="input"
          placeholder="Enter your Email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="flex-column">
        <label>Password </label>
      </div>
      <div className="inputForm">
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Enter your Password"
          value={form.password}
          onChange={handleChange}
        />
      </div>

      <div className="flex-row">
        <div>
          <input type="checkbox" />
          <label>Remember me </label>
        </div>
        <span className="span">Forgot password?</span>
      </div>

      <button type="submit" className="button-submit">
        Sign In
      </button>
      <p className="p">
        Don't have an account? <span className="span">Sign Up</span>
      </p>
    </form>
  );
}
