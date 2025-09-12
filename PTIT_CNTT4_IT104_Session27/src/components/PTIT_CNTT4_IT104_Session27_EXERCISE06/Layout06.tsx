// src/components/Layout.jsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout06() {
  return (
    <div>
      {/* Header */}
      <header className="flex gap-4 p-4 bg-gray-100 shadow">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-700"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/product"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-700"
          }
        >
          Product
        </NavLink>
        <NavLink
          to="/detail"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-700"
          }
        >
          Detail
        </NavLink>
      </header>

      {/* Nội dung trang */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
