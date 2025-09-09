import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // validate
    if (!email || !password || !confirm) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    if (password !== confirm) {
      alert("Mật khẩu nhập lại không khớp!");
      return;
    }
    if (users.find((u: string) => u.email === email)) {
      alert("Email đã tồn tại!");
      return;
    }

    // thêm user mới
    const newUser = { email, password };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    alert("Đăng ký thành công!");
    navigate("/login"); // chuyển về login
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-120 rounded-xl bg-white p-8 text-gray-900 shadow-lg">
        <p className="text-center text-xl font-bold">Create account</p>

        <form className="mt-6 space-y-4" onSubmit={handleRegister}>
          <div className="text-sm">
            <label className="block text-gray-600 mb-1">Your email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@email.com"
              className="w-full rounded-md border px-4 py-3"
            />
          </div>

          <div className="text-sm">
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full rounded-md border px-4 py-3"
            />
          </div>

          <div className="text-sm">
            <label className="block text-gray-600 mb-1">Confirm password</label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="********"
              className="w-full rounded-md border px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-violet-500 py-3 font-semibold text-white hover:bg-violet-600"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-violet-500 hover:underline hover:text-violet-600"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
