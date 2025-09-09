import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(
      (u:string) => u.email === email && u.password === password
    );

    if (user) {
      alert("Đăng nhập thành công!");
      // điều hướng sang trang chính
      navigate("/home");
    } else {
      alert("Email hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-120 rounded-xl bg-white p-8 text-gray-900 shadow-lg">
        <p className="text-center text-xl font-bold">Login</p>

        <form className="mt-6 space-y-4" onSubmit={handleLogin}>
          <div className="text-sm">
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border px-4 py-3"
            />
          </div>

          <div className="text-sm">
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-violet-500 py-3 font-semibold text-white hover:bg-violet-600"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-violet-500 hover:underline hover:text-violet-600"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
