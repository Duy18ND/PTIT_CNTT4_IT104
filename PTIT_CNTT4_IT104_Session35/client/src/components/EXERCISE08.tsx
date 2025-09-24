// src/pages/LoginPage.tsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slice/SaveLoginSlice";
import type { AppDispatch, RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

export default function EXERCISE08() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const currentUser = useSelector((state: RootState) => state.EXE08.currentUser);

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Reset lỗi cũ
    setError(null);
    dispatch(login(form));
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    } else if (form.email !== "" && form.password !== "") {
      setError("Email hoặc mật khẩu không đúng!");
    }
  }, [currentUser, navigate]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Mật khẩu: </label>
          <input
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
