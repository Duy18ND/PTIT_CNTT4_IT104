import React, { Component } from 'react'

type TodoItem = {
  id: number;
  name: string;
  completed: boolean;
};

type State = {
  todo: string;
  todoList: TodoItem[];
  error: string;
  editingId: number | null;
  isOpenConfirm: boolean; 
  deletingId: number | null; 
};

export default class EXERCISE09 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      todo: "",
      todoList: [],
      error: "",
      editingId: null,
      isOpenConfirm: false,
      deletingId: null
    };
  }

  componentDidMount() {
    const savedTodos = localStorage.getItem("todoList");
    if (savedTodos) {
      this.setState({ todoList: JSON.parse(savedTodos) });
    }
  }

  componentDidUpdate(prevProps: object, prevState: State) {
    if (prevState.todoList !== this.state.todoList) {
      localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
    }
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.state.todo.trim() === "") {
      this.setState({ error: "Tên công việc không được để trống!" });
      return;
    }

    if (this.state.editingId !== null) {
      this.setState(prev => ({
        todoList: prev.todoList.map(item =>
          item.id === this.state.editingId
            ? { ...item, name: this.state.todo }
            : item
        ),
        todo: "",
        error: "",
        editingId: null
      }));
      return;
    }

    const newTodo: TodoItem = {
      id: Date.now(),
      name: this.state.todo,
      completed: false
    };

    this.setState(prev => ({
      todoList: [...prev.todoList, newTodo],
      todo: "",
      error: ""
    }));
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ todo: e.target.value });
  };

  handleDelete = (id: number) => {
    this.setState({ isOpenConfirm: true, deletingId: id });
  };

  handleCancelDelete = () => {
    this.setState({ isOpenConfirm: false, deletingId: null });
  };

  handleConfirmDelete = () => {
    if (this.state.deletingId !== null) {
      this.setState(prev => ({
        todoList: prev.todoList.filter(item => item.id !== prev.deletingId),
        isOpenConfirm: false,
        deletingId: null
      }));
    }
  };

  handleEdit = (id: number) => {
    const editItem = this.state.todoList.find(item => item.id === id);
    if (editItem) {
      this.setState({
        todo: editItem.name,
        editingId: id
      });
    }
  };

  handleToggle = (id: number) => {
    this.setState(prev => ({
      todoList: prev.todoList.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    }));
  };

  render() {
    const completedCount = this.state.todoList.filter(item => item.completed).length;

    return (
      <>
        {this.state.isOpenConfirm && (
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
                <button onClick={this.handleCancelDelete}>Hủy</button>
                <button onClick={this.handleConfirmDelete}>Xóa</button>
              </div>
            </div>
          </>
        )}

        <div className="body09">
          <div className="container09">
            <h2>Danh sách công việc</h2>

            <form onSubmit={this.handleSubmit}>
              <div className="Search">
                <input
                  type="text"
                  placeholder="Nhập tên công việc"
                  onChange={this.handleChange}
                  value={this.state.todo}
                />
                <button>{this.state.editingId ? "Cập nhật" : "Thêm"}</button>
              </div>

              <div className="warning09">{this.state.error}</div>

              {this.state.todoList.map(item => (
                <div className="box09" key={item.id}>
                  <p>
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => this.handleToggle(item.id)}
                    />
                    <label
                      style={{
                        textDecoration: item.completed ? "line-through" : "none"
                      }}
                    >
                      {item.name}
                    </label>
                  </p>
                  <p>
                    <button
                      type="button"
                      className="edit09"
                      onClick={() => this.handleEdit(item.id)}
                    >
                      Sửa
                    </button>
                    <button
                      type="button"
                      className="delete09"
                      onClick={() => this.handleDelete(item.id)}
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
                {completedCount}/{this.state.todoList.length}
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
