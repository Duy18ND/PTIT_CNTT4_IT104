import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Admin() {
  return (
    <div>
      Trang Admin
      <Link to='/admin/user'>Quản lý người dùng</Link>
      <Link to='/admin/product'>Quản lý Sản phẩm</Link>
      <NavLink to='/admin/order'>Quản lý hóa đơn</NavLink>
      <h1>Phan dau</h1>
      <Outlet></Outlet>
      <h1>Phan footer</h1>
    </div>
  )
}
