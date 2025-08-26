import React, { useState, useEffect } from "react";
import '../PTIT_CNTT4_IT104_SESSION17_EXERCISE09/EXERCISE09.css'

type TodoItem = {
  id: number;
  name: string;
  completed: boolean;
};

export default function EXERCISE10() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalType, setModalType] = useState<"delete" | "edit" | null>(null);
  const [modalTodoId, setModalTodoId] = useState<number | null>(null);
  const [editingTodoName, setEditingTodoName] = useState("");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todoList");
    if (savedTodos) {
      setTodoList(JSON.parse(savedTodos));
    }
  }, []);

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
      setTodoList(prev =>
        prev.map(item =>
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

    setTodoList(prev => [...prev, newTodo]);
    setTodo("");
    setError("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleToggle = (id: number) => {
    setTodoList(prev =>
      prev.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Mở modal xóa
  const openDeleteModal = (id: number) => {
    setIsOpenModal(true);
    setModalType("delete");
    setModalTodoId(id);
  };

  // Mở modal sửa
  const openEditModal = (id: number) => {
    const todoItem = todoList.find(item => item.id === id);
    if (todoItem) {
      setEditingTodoName(todoItem.name);
      setIsOpenModal(true);
      setModalType("edit");
      setModalTodoId(id);
    }
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setModalType(null);
    setModalTodoId(null);
    setEditingTodoName("");
  };

  const confirmDelete = () => {
    if (modalTodoId !== null) {
      setTodoList(prev => prev.filter(item => item.id !== modalTodoId));
      closeModal();
    }
  };

  const confirmEdit = () => {
    if (modalTodoId !== null && editingTodoName.trim() !== "") {
      setTodoList(prev =>
        prev.map(item =>
          item.id === modalTodoId ? { ...item, name: editingTodoName } : item
        )
      );
      closeModal();
    }
  };

  const completedCount = todoList.filter(item => item.completed).length;

  return (
    <>
      {/* Modal */}
      {isOpenModal && (
        <>
          <div className="overlayDelete"></div>
          <div className="confirmDelete">
            <h2>{modalType === "delete" ? "Xác nhận xóa" : "Cập nhật công việc"}</h2>
            <div className="titleDelete">
              {modalType === "delete" ? (
                <div>Bạn có chắc muốn xóa công việc này không?</div>
              ) : (
                <input
                  type="text"
                  value={editingTodoName}
                  onChange={(e) => setEditingTodoName(e.target.value)}
                />
              )}
            </div>
            <hr />
            <div className="btnDelete">
              <button onClick={closeModal}>Hủy</button>
              <button onClick={modalType === "delete" ? confirmDelete : confirmEdit}>
                {modalType === "delete" ? "Xóa" : "Cập nhật"}
              </button>
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

            {todoList.map(item => (
              <div className="box09" key={item.id}>
                <p>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleToggle(item.id)}
                  />
                  <label style={{ textDecoration: item.completed ? "line-through" : "none" }}>
                    {item.name}
                  </label>
                </p>
                <p>
                  <button type="button" className="edit09" onClick={() => openEditModal(item.id)}>
                    Sửa
                  </button>
                  <button type="button" className="delete09" onClick={() => openDeleteModal(item.id)}>
                    Xóa
                  </button>
                </p>
              </div>
            ))}
          </form>

          <div className="total09">
            Công việc đã hoàn thành: <span>{completedCount}/{todoList.length}</span>
          </div>
        </div>
      </div>
    </>
  );
}
