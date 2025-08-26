import React, { useState, useEffect } from "react";
import './EXERCISE09.css'
type TodoItem = {
  id: number;
  name: string;
  completed: boolean;
};

export default function EXERCISE09() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todoList");
    if (savedTodos) {
      setTodoList(JSON.parse(savedTodos));
    }
  }, []);

  // Lưu vào localStorage khi todoList thay đổi
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim() === "") {
      setError("Tên công việc không được để trống!");
      return;
    }

    if (editingId !== null) {
      setTodoList((prev) =>
        prev.map((item) =>
          item.id === editingId ? { ...item, name: todo } : item
        )
      );
      setTodo("");
      setEditingId(null);
      setError("");
      return;
    }

    const newTodo: TodoItem = {
      id: Date.now(),
      name: todo,
      completed: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    setTodo("");
    setError("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleDelete = (id: number) => {
    setIsOpenConfirm(true);
    setDeletingId(id);
  };

  const handleCancelDelete = () => {
    setIsOpenConfirm(false);
    setDeletingId(null);
  };

  const handleConfirmDelete = () => {
    if (deletingId !== null) {
      setTodoList((prev) => prev.filter((item) => item.id !== deletingId));
      setIsOpenConfirm(false);
      setDeletingId(null);
    }
  };

  const handleEdit = (id: number) => {
    const editItem = todoList.find((item) => item.id === id);
    if (editItem) {
      setTodo(editItem.name);
      setEditingId(id);
    }
  };

  const handleToggle = (id: number) => {
    setTodoList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const completedCount = todoList.filter((item) => item.completed).length;

  return (
    <>
      {isOpenConfirm && (
        <>
          <div className="overlayDelete"></div>
          <div className="confirmDelete">
            <h2>Xác nhận</h2>
            <div className="titleDelete">
              <i className="fa-solid fa-circle-exclamation"></i>
              <div>Bạn có chắc muốn xóa công việc này không?</div>
            </div>
            <hr />
            <div className="btnDelete">
              <button onClick={handleCancelDelete}>Hủy</button>
              <button onClick={handleConfirmDelete}>Xóa</button>
            </div>
          </div>
        </>
      )}

      <div className="body09">
        <div className="container09">
          <h2>Danh sách công việc</h2>

          <form onSubmit={handleSubmit}>
            <div className="Search">
              <input
                type="text"
                placeholder="Nhập tên công việc"
                onChange={handleChange}
                value={todo}
              />
              <button>{editingId ? "Cập nhật" : "Thêm"}</button>
            </div>

            <div className="warning09">{error}</div>

            {todoList.map((item) => (
              <div className="box09" key={item.id}>
                <p>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleToggle(item.id)}
                  />
                  <label
                    style={{
                      textDecoration: item.completed ? "line-through" : "none",
                    }}
                  >
                    {item.name}
                  </label>
                </p>
                <p>
                  <button
                    type="button"
                    className="edit09"
                    onClick={() => handleEdit(item.id)}
                  >
                    Sửa
                  </button>
                  <button
                    type="button"
                    className="delete09"
                    onClick={() => handleDelete(item.id)}
                  >
                    Xóa
                  </button>
                </p>
              </div>
            ))}
          </form>

          <div className="total09">
            Công việc đã hoàn thành:{" "}
            <span>
              {completedCount}/{todoList.length}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
