import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from '../PTIT_CNTT_IT104_Session25_EXERCISE02/Contact'

export default function EXERCISE02() {
    const router = createBrowserRouter([
        {
            path: "contact",
            element: <Contact></Contact> 
        }
    ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
