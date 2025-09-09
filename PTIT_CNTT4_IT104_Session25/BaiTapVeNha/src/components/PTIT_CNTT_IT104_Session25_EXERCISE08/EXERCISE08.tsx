import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListUser from "./ListUser";
import UserDetail from "./UserDetail";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <ListUser />,
  },
  {
    path: "/users/:id",
    element: <UserDetail />,
  },
]);

export default function EXERCISE08() {
  return <RouterProvider router={routers} />;
}