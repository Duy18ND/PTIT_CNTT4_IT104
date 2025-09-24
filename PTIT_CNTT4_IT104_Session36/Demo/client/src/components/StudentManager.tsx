import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddUser, deleteUser, getAllUser, updateUser } from "../store/Slice/userSlice";
import type { AppDispatch, RootState } from "../store/Store";

export default function StudentManager() {
    const [inputValue, setInputValue] = useState<string>("");
    const dispatch = useDispatch<AppDispatch>();
    const { users, loading, error } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        dispatch(getAllUser());
    }, [dispatch]);

    if (loading) return <p>Đang tải...</p>;
    if (error) return <p>Lỗi: {error}</p>;

    const handleDelete = (id: number) => {
        dispatch(deleteUser(id));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleAdd = () => {
        if (inputValue.trim() === "") {
            return alert("Dữ liệu không được để trống!");
        }
        dispatch(AddUser({
            id: Math.floor(Math.random() * 9999),
            name: inputValue
        }));
        setInputValue("");
    };
    const handleEdit = (id: number, oldName: string) => {
        const newName = prompt("Nhập tên mới:", oldName);
        if (newName && newName.trim() !== "") {
            dispatch(updateUser({ id, name: newName }));
        }
    };
    return (
        <div>
            <h2>Danh sách sinh viên</h2>
            <input
                type="text"
                placeholder="Thêm sinh viên"
                onChange={handleChange}
                value={inputValue}
            />
            <button onClick={handleAdd}>Thêm</button>
            <ul>
                {users.map((u: any) => (
                    <li key={u.id}>
                        {u.name}
                        <button onClick={() => handleDelete(u.id)}>Xóa</button>
                        <button onClick={() => handleEdit(u.id, u.name)}>Sửa</button>

                    </li>
                ))}
            </ul>
        </div>
    );
}
