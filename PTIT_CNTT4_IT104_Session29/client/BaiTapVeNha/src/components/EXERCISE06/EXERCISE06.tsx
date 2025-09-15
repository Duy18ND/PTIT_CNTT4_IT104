import React, { useState } from "react";
import axios from "axios";

type DataStudent = {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
};

export default function EXERCISE06() {
  const [form, setForm] = useState<Omit<DataStudent, "id">>({
    student_name: "",
    email: "",
    address: "",
    phone: "",
    status: true,
    created_at: new Date().toISOString(),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "status" ? value === "true" : value,
    }));
  };

  const handleAdd = async () => {
    if (!form.student_name.trim() || !form.email.trim()) {
      alert("Tên và Email không được để trống!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/studentList", form);
      console.log("Thêm sinh viên thành công:", res.data);

      // reset form
      setForm({
        student_name: "",
        email: "",
        address: "",
        phone: "",
        status: true,
        created_at: new Date().toISOString(),
      });
    } catch (err) {
      console.error("Lỗi khi thêm sinh viên:", err);
    }
  };

  return (
    <div>
      <h1>Thêm sinh viên</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "300px" }}>
        <input
          type="text"
          name="student_name"
          value={form.student_name}
          onChange={handleChange}
          placeholder="Tên sinh viên"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Địa chỉ"
        />
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Số điện thoại"
        />
        <select name="status" value={form.status.toString()} onChange={handleChange}>
          <option value="true">Đang học</option>
          <option value="false">Nghỉ học</option>
        </select>
        <input
          type="datetime-local"
          name="created_at"
          value={form.created_at.slice(0, 16)}
          onChange={handleChange}
        />

        <button onClick={handleAdd}>Thêm</button>
      </div>
    </div>
  );
}
