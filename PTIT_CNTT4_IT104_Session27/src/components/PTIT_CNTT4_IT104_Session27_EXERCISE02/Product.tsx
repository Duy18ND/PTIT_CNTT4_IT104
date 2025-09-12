import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "./Data";

export default function ProductList() {
  const navigate = useNavigate();

  return (
    <div className="p-4 grid grid-cols-5 gap-4">
      {products.map((item) => (
        <div
          key={item.id}
          className="border rounded p-4 shadow hover:shadow-lg transition"
        >
          <h2 className="font-bold text-lg">{item.name}</h2>
          <p className="text-gray-700">{item.price}</p>
          <button
            onClick={() => navigate(`/product/${item.id}`)}
            className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            Xem chi tiết
          </button>
        </div>
      ))}
    </div>
  );
}
