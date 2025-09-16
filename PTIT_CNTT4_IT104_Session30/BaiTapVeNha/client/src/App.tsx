import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { Pencil, Trash } from "lucide-react";
import axios from "axios";

type Task = {
  id: number;
  name: string;
  status: boolean;
};

export default function App() {
  const [task, setTask] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string>("");

  // Edit state
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState<Task | null>(null);
  const [editValue, setEditValue] = useState("");

  // Delete state
  const [isConfirming, setIsConfirming] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState<number | null>(null);

  // Loading state
  const [loading, setLoading] = useState<boolean>(true);

  // Filter state
  const [filter, setFilter] = useState<"all" | "done" | "doing">("all");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.trim() === "") {
      setError("Dữ liệu trống. Vui lòng kiểm tra lại!");
    } else {
      setError("");
    }
    setInputValue(value);
  };

  const handleAdd = async () => {
    if (!inputValue.trim()) return;

    const newTask: Task = {
      id: Math.floor(Math.random() * 999999),
      name: inputValue,
      status: false,
    };

    try {
      await axios.post("http://localhost:8080/tasks", newTask);
      setTask((prev) => [...prev, newTask]);
      setInputValue("");
    } catch (error) {
      console.log("Lỗi thêm task", error);
    }
  };

  async function getAllTask() {
    try {
      const response = await axios.get("http://localhost:8080/tasks");
      setTask(response.data);
    } catch (error) {
      console.log("Lỗi API", error);
    }
  }

  useEffect(() => {
    setLoading(true);

    setTimeout(async () => {
      await getAllTask();
      setLoading(false);
    }, 2000);
  }, []);

  const handleToggle = async (id: number, currentStatus: boolean) => {
    try {
      await axios.patch(`http://localhost:8080/tasks/${id}`, {
        status: !currentStatus,
      });

      setTask((prev) =>
        prev.map((t) => (t.id === id ? { ...t, status: !currentStatus } : t))
      );
    } catch (error) {
      console.log("Lỗi toggle", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/tasks/${id}`);
      setTask((prev) => prev.filter((item) => item.id !== id));
      setIsConfirming(false);
      setDeleteTaskId(null);
    } catch (error) {
      console.log("Lỗi xóa ", error);
    }
  };

  const openEdit = (t: Task) => {
    setIsEditing(true);
    setEditTask(t);
    setEditValue(t.name);
  };

  const handleEditSave = async () => {
    if (!editTask) return;
    try {
      await axios.patch(`http://localhost:8080/tasks/${editTask.id}`, {
        name: editValue,
      });
      setTask((prev) =>
        prev.map((t) =>
          t.id === editTask.id ? { ...t, name: editValue } : t
        )
      );
      setIsEditing(false);
      setEditTask(null);
    } catch (error) {
      console.log("Lỗi Edit", error);
    }
  };

  const openConfirmDelete = (id: number) => {
    setIsConfirming(true);
    setDeleteTaskId(id);
  };

  // Danh sách sau khi lọc
  const filteredTasks = task.filter((t) => {
    if (filter === "done") return t.status === true;
    if (filter === "doing") return t.status === false;
    return true;
  });
  // Xóa tất cả công việc hoàn thành
  const handleDeleteCompleted = async () => {
    try {
      // Lấy những task hoàn thành
      const completed = task.filter((t) => t.status === true);

      // Gọi API xóa từng task
      await Promise.all(
        completed.map((t) =>
          axios.delete(`http://localhost:8080/tasks/${t.id}`)
        )
      );

      // Cập nhật lại state
      setTask((prev) => prev.filter((t) => !t.status));
    } catch (error) {
      console.error("Lỗi khi xóa công việc hoàn thành", error);
    }
  };

  // Xóa tất cả công việc
  const handleDeleteAll = async () => {
    try {
      // Gọi API xóa từng task
      await Promise.all(task.map((t) => axios.delete(`http://localhost:8080/tasks/${t.id}`)));

      // Reset state
      setTask([]);
    } catch (error) {
      console.error("Lỗi khi xóa tất cả công việc", error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      {/* Loading overlay */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#737476]/40 backdrop-blur-sm z-50">
          <div className="w-12 h-12 border-4 border-[#1778ff] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Chỉ hiển thị nội dung khi load xong */}
      {!loading && (
        <div className="flex flex-col gap-5 border border-[#e3e6e9] w-[500px] p-5 bg-[#ffffff] rounded-md shadow relative">
          <h1 className="text-3xl font-medium mb-4 text-center">
            Quản lý công việc
          </h1>

          {/* ADD */}
          <div className="flex flex-col gap-4">
            <div>
              <input
                type="text"
                placeholder="Nhập công việc"
                value={inputValue}
                onChange={handleChange}
                className="border border-[#e2e2e2] outline-none rounded-[4px] pl-1.5 py-1 w-full"
              />
              <p className="text-red-600 text-[14px]">{error}</p>
            </div>
            <Button type="primary" onClick={handleAdd} className="!h-9">
              Thêm công việc
            </Button>
          </div>

          {/* Filter Button */}
          <div className="flex justify-center gap-3 border border-[#eaecee] p-3 rounded-md">
            <Button
              onClick={() => setFilter("all")}
              className={filter === "all" ? "!bg-[#1778ff] !text-white" : ""}
            >
              Tất cả
            </Button>
            <Button
              onClick={() => setFilter("done")}
              className={filter === "done" ? "!bg-[#1778ff] !text-white" : ""}
            >
              Hoàn thành
            </Button>
            <Button
              onClick={() => setFilter("doing")}
              className={filter === "doing" ? "!bg-[#1778ff] !text-white" : ""}
            >
              Đang thực hiện
            </Button>
          </div>

          {/* Content */}
          <ul className="flex flex-col gap-3 max-h-[250px] overflow-y-auto">
            {filteredTasks.map((item) => (
              <li
                key={item.id}
                className="flex justify-between border border-[#eaecee] p-2"
              >
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked={item.status}
                    onChange={() => handleToggle(item.id, item.status)}
                  />
                  <p
                    className={
                      item.status
                        ? "line-through text-gray-400"
                        : "text-black"
                    }
                  >
                    {item.name}
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <button
                    className="cursor-pointer"
                    onClick={() => openEdit(item)}
                  >
                    <Pencil className="text-amber-300 hover:text-amber-600 transition duration-400 ease-in-out" />
                  </button>
                  <button
                    className="cursor-pointer"
                    onClick={() => openConfirmDelete(item.id)}
                  >
                    <Trash className="text-red-300 hover:text-red-600 transition duration-400 ease-in-out" />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Delete */}
          <div className="flex justify-between mt-4">
            <button
              onClick={handleDeleteCompleted}
              className="bg-[#ff4d4f] text-white px-4 py-2 font-medium rounded-md hover:bg-red-600 transition"
            >
              Xóa công việc hoàn thành
            </button>
            <button
              onClick={handleDeleteAll}
              className="bg-[#ff4d4f] text-white px-4 py-2 font-medium rounded-md hover:bg-red-600 transition"
            >
              Xóa tất cả công việc
            </button>
          </div>

        </div>
      )}

      {/* Edit Popup */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#737476]/50 backdrop-blur-sm">
          <div className="flex flex-col gap-4 border border-gray-200 p-4 rounded-lg shadow bg-white w-[400px]">
            <h1 className="text-lg font-semibold text-gray-700">
              Sửa công việc
            </h1>
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
            />
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-amber-400 text-white hover:bg-amber-500 transition"
                onClick={handleEditSave}
              >
                Sửa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Delete Popup */}
      {isConfirming && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#737476]/50 backdrop-blur-sm">
          <div className="flex flex-col gap-4 border border-gray-200 p-4 rounded-lg shadow bg-white w-[350px]">
            <h1 className="text-lg font-semibold text-gray-700">
              Xác nhận xóa
            </h1>
            <p className="text-gray-600">
              Bạn có chắc muốn xóa công việc này không?
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                onClick={() => setIsConfirming(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                onClick={() => deleteTaskId && handleDelete(deleteTaskId)}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
