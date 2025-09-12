import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Admin from './layout/Admin'
import UserManager from './pages/UserManager'
import ProductManager from './pages/ProductManager'
import './App.css'
import Order from './pages/Order'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import ProtectedRoute from './pages/ProtectedRoute'
export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/about",
      element: <About></About>
    },
    {
      path: "/contact",
      element: <Contact></Contact>
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/admin",
      element: <ProtectedRoute element={<Admin></Admin>}/>,
      children: [
        {
          path: "user",
          element: <UserManager></UserManager>
        },
        {
          path: "product",
          element: <ProductManager></ProductManager>
        },
        {
          path: "order",
          element: <Order></Order>
        },
        {
          path: "product/:id",
          element: <ProductDetail></ProductDetail>
        },

      ]
    },
    {
      path: "*",
      element: <NotFound></NotFound>
    }
  ])
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}
