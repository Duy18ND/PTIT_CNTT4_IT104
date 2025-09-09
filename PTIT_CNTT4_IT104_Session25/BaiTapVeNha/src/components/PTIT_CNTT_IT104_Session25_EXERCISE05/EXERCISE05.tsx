import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './NotFound'

export default function EXERCISE05() {
    const router = createBrowserRouter([
        {
            path: "notfound",
            element: <NotFound></NotFound>
        }
    ])
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
