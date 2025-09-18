import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
    // lấy đúng đường dẫn state
    const user = useSelector((state: any) => state.EXERCISE01.user);

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", width: "300px" }}>
            <h2>Thông tin người dùng</h2>
            <p><b>ID:</b> {user.id}</p>
            <p><b>Họ tên:</b> {user.name}</p>
            <p><b>Giới tính:</b> {user.gender}</p>
            <p><b>Ngày sinh:</b> {user.date}</p>
            <p><b>Địa chỉ:</b> {user.address}</p>
        </div>
    );
}
