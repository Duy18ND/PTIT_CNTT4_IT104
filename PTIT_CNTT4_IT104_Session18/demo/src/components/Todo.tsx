import React, { useReducer } from 'react';

type Job = {
  id: number;
  title: string;
  completed: boolean;
};

type State = {
  jobs: Job[];
  new_title: string;
};

const initial: State = {
  jobs: [
    { id: 1, title: "học C++", completed: true },
    { id: 2, title: "Python", completed: false }
  ],
  new_title: ""
};

type Action =
  | { type: "SET_NEW_TITLE"; payload: string }
  | { type: "ADD"; payload: Job }
  | { type: "DELETE"; payload: number }
  | { type: "EDIT"; payload: { id: number; title: string } };

const todoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_NEW_TITLE":
      return { ...state, new_title: action.payload };

    case "ADD":
      return { ...state, jobs: [...state.jobs, action.payload], new_title: "" };

    case "DELETE":
      return { ...state, jobs: state.jobs.filter(job => job.id !== action.payload) };

    case "EDIT":
      return {
        ...state,
        jobs: state.jobs.map(job =>
          job.id === action.payload.id ? { ...job, title: action.payload.title } : job
        )
      };

    default:
      return state;
  }
};

export default function Todos() {
  const [todos, dispatch] = useReducer(todoReducer, initial);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_NEW_TITLE", payload: e.target.value });
  };
  const addTodo = () => {
    if (!todos.new_title.trim()) return;
    const newTodo: Job = {
      id: Math.floor(Math.random() * 9999999),
      title: todos.new_title,
      completed: false
    };
    dispatch({ type: "ADD", payload: newTodo });
  };

  const deleteJob = (id: number) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const editJob = (id: number) => {
    const newTitle = prompt("Nhập tiêu đề mới:");
    if (newTitle) {
      dispatch({ type: "EDIT", payload: { id, title: newTitle } });
    }
  };

  return (
    <div>
      <input
        type="text"
        value={todos.new_title}
        onChange={handleChange}
        placeholder="Nhập công việc mới"
      />
      <button onClick={addTodo}>Thêm công việc</button>

      <h1>DANH SÁCH CÔNG VIỆC</h1>
      <ul>
        {todos.jobs.map(item => (
          <li key={item.id}>
            {item.title}{" "}
            <button onClick={() => deleteJob(item.id)}>Xóa</button>
            <button onClick={() => editJob(item.id)}>Sửa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
