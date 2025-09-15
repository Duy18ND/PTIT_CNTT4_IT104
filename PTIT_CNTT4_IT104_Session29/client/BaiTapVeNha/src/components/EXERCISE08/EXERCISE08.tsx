import React, { useEffect, useState } from "react";
import { Edit, Trash2, UserPlus } from "lucide-react";
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

export default function EXERCISE08() {
  const [students, setStudents] = useState<DataStudent[]>([]);

  // Gọi API lấy danh sách sinh viên
  const getStudents = async () => {
    try {
      const res = await axios.get<DataStudent[]>(
        "http://localhost:8080/studentList"
      );
      setStudents(res.data);
    } catch (err) {
      console.error("Lỗi khi lấy danh sách sinh viên:", err);
    }
  };

  // Hàm xóa sinh viên
  const deleteStudent = async (id: number) => {
    if (!window.confirm("Bạn có chắc muốn xóa sinh viên này?")) return;
    try {
      await axios.delete(`http://localhost:8080/studentList/${id}`);
      console.log(`Đã xóa sinh viên có id = ${id}`);
      // Xóa khỏi state mà không cần reload toàn bộ
      setStudents((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      console.error("Lỗi khi xóa sinh viên:", err);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-slate-600 text-white px-6 py-4 flex items-center justify-between">
        <h1 className="text-[24px] font-semibold">Quản lý sinh viên</h1>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <UserPlus size={16} />
          Thêm mới sinh viên
        </button>
      </div>

      {/* Table Container */}
      <div className="p-6">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  Tên sinh viên
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  Email
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  Địa chỉ
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  Số điện thoại
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  Lựa chọn
                </th>
              </tr>
            </thead>
            <tbody>
              {students.length > 0 ? (
                students.map((s) => (
                  <tr key={s.id} className="border-t border-gray-100">
                    <td className="py-3 px-4">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                      />
                    </td>
                    <td className="py-3 px-4">{s.student_name}</td>
                    <td className="py-3 px-4">{s.email}</td>
                    <td className="py-3 px-4">{s.address}</td>
                    <td className="py-3 px-4">{s.phone}</td>
                    <td className="py-3 px-4 flex gap-3">
                      <button className="text-blue-500 hover:text-blue-700">
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => deleteStudent(s.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="border-t border-gray-100">
                  <td colSpan={6} className="py-8 text-center text-gray-500">
                    Không có dữ liệu
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination (demo) */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-gray-600">
            Hiển thị <strong>1-{students.length}</strong> trên{" "}
            <strong>{students.length}</strong> kết quả
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-sm text-gray-600 mr-2">Trang</span>
            <button
              className="px-3 py-1 text-gray-400 cursor-not-allowed"
              disabled
            >
              ‹
            </button>
            <button className="px-3 py-1 bg-blue-500 text-white rounded">
              1
            </button>
            <button
              className="px-3 py-1 text-gray-400 cursor-not-allowed"
              disabled
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
