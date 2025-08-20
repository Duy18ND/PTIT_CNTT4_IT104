import React, { Component } from 'react'

type Task = {
  id: number;
  task: string;
  completed: boolean;
};

type Click = {
  todo: Task[];
  taskName: string;
};

export default class Event extends Component<{}, Click> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todo: [
        {
          id: 1,
          task: "Học React",
          completed: true,
        },
        {
          id: 2,
          task: "Làm bài tập TypeScript",
          completed: true,
        },
      ],
      taskName: ""
    };
  }

  // Xóa công việc
  deleteTask(valueId: number) {
    this.setState((prevState) => ({
      todo: prevState.todo.filter((task) => task.id !== valueId),
    }));
  }

  // Lấy giá trị input
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ taskName: e.target.value });
  }

  // Thêm công việc mới
  addTodo = () => {
    if (this.state.taskName.trim() !== "") {
      let newTodo: Task = {
        id: Math.floor(Math.random() * 9999999),
        task: this.state.taskName,
        completed: false
      };
      this.setState((prevState) => ({
        todo: [...prevState.todo, newTodo],
        taskName: ""
      }));
    }
  }

  render() {
    return (
      <div>
        <h1>Học về Event</h1>
        <h2>Danh sách công việc cần làm</h2>

        {/* input controlled component */}
        <input
          type="text"
          placeholder="Nhập công việc mới"
          value={this.state.taskName}
          onChange={this.handleChange}
        />
        <button onClick={this.addTodo}>Thêm công việc</button>

        <ul>
          {this.state.todo.map((item) => (
            <li key={item.id}>
              Tên công việc: {item.task} -{" "}
              {item.completed ? "Đã hoàn thành" : "Chưa hoàn thành"}{" "}
              <button onClick={() => this.deleteTask(item.id)}>Xóa</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
