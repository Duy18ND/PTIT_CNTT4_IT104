import React from "react";
import { Outlet } from "react-router-dom";

export default function EXERCISE03() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Outlet để render chi tiết sản phẩm */}
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}
