import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import About from './About';

export default function EXERCISE01() {
  const router = createBrowserRouter([
    {
      path: "home",
      element: <Home></Home>
    },
    {
      path: "contact",
      element: <Contact></Contact>
    },
    {
      path: "about",
      element: <About></About>
    },
  ]);
  return (
    <div>
      <h1>Đây là trang chủ</h1>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
