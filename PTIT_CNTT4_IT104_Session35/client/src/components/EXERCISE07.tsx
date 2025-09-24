// src/components/FavoriteList.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/slice/favoriteSlice";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import type { AppDispatch, RootState } from "../store/store";

export default function FavoriteList() {
  // Lấy đúng state.users
  const users = useSelector((state: RootState) => state.EXE07.users);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd" }}>
      <h3 style={{ fontWeight: "bold" }}>List Favorites User</h3>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            padding: "10px 0",
            borderBottom: "1px solid #eee",
          }}
        >
          <p>
            <b>UserName:</b> {user.name}
          </p>
          <p>
            Favorites:{" "}
            {user.isFavorite ? (
              <HeartFilled
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => dispatch(toggleFavorite(user.id))}
              />
            ) : (
              <HeartOutlined
                style={{ color: "black", cursor: "pointer" }}
                onClick={() => dispatch(toggleFavorite(user.id))}
              />
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
