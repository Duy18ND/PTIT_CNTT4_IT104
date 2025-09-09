import React from "react";
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Product from "./Product";
import Detail from "./Detail";
import Home from "./Home";

// Layout cha
function Layout() {
  return (
    <div>
      {/* Menu */}
      <nav style={{ display: "flex", gap: "20px" }}>
        <NavLink to="/home" className='p-2 items-center'>Trang chủ</NavLink>
        <NavLink to="/product" className='p-2 items-center'>Quản lý sản phẩm</NavLink>
        <NavLink to="/detail" className='p-2 items-center'>Chi tiết</NavLink>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default function EXERCISE06() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // layout cha
      children: [
        { path: "home", element: <Home /> },
        { path: "product", element: <Product /> },
        { path: "detail", element: <Detail /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
