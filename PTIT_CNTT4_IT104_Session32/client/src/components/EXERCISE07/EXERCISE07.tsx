import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
const router = createBrowserRouter([
    {
        path: "/",
        element: <Register></Register>
    },
    {
        path: "/login",
        element: <Login></Login>
    },
])
export default function EXERCISE07() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
