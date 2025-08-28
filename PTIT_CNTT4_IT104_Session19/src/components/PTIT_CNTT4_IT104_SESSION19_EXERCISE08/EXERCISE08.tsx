import React, { useReducer, useState } from "react";
import "./EXERCISE08.css";

type State = {
  loading: boolean;
  success: boolean;
  error: string | null;
};

type Action = {
  type: string;
  payload?: string;
};

function loginReducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOGIN_START":
      return { loading: true, success: false, error: null };
    case "LOGIN_SUCCESS":
      return { loading: false, success: true, error: null };
    case "LOGIN_ERROR":
      return { loading: false, success: false, error: action.payload || "Lỗi không xác định" };
    default:
      return state;
  }
}

export default function EXERCISE08() {
  const [state, dispatch] = useReducer(loginReducer, {
    loading: false,
    success: false,
    error: null,
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const defaultUsername = "admin";
  const defaultPassword = "123";

  const handleLogin = () => {
    dispatch({ type: "LOGIN_START" });

    setTimeout(() => {
      if (username === defaultUsername && password === defaultPassword) {
        dispatch({ type: "LOGIN_SUCCESS" });
      } else {
        dispatch({ type: "LOGIN_ERROR", payload: "Sai username hoặc password" });
      }
    }, 1000);
  };

  return (
    <div className="login-container">
      <h2>Đăng nhập</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />

      <button
        onClick={handleLogin}
        disabled={state.loading}
        className={`login-button ${state.loading ? "loading" : ""}`}
      >
        {state.loading ? "Đang đăng nhập..." : "Đăng nhập"}
      </button>

      {state.success && <p className="login-success">Đăng nhập thành công!</p>}
      {state.error && <p className="login-error">đăng nhập thất bại {state.error}</p>}
    </div>
  );
}
