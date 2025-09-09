import React from "react";
import { Link, useLocation } from "react-router-dom";
import HomePage from "./HomePage";
import NotFound from "./NotFound";

export default function CustomLink() {
  const location = useLocation();
  if (location.pathname === "/home-page") {
    return <HomePage />;
  }
  if (location.pathname !== "/") {
    return <NotFound />;
  }
  return (
    <div>
      <h3>Chào mừng! Hãy vào trang chủ:</h3>
      <Link to="/home-page">Đi tới HomePage</Link>
    </div>
  );
}
