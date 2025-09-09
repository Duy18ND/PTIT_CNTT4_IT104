import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'

export default function EXERCISE03() {
    const router = createBrowserRouter([
        {
            path: "login",
            element: <Login></Login>
        }
    ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
