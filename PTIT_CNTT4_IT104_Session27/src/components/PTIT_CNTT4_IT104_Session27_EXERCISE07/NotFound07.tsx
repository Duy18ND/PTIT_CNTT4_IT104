import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound07() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-6">
        404 - Trang bạn tìm không tồn tại
      </h1>
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Về trang chủ
        </button>
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 transition"
        >
          Quay lại
        </button>
      </div>
    </div>
  );
}
