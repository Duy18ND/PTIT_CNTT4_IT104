import React, { useReducer } from 'react'

export default function UseReducer() {
  const initialState = { count: 0 };

  // reducer nhận state + action, trả về state mới
  const reducer = (state: typeof initialState, action: { type: string }) => {
    switch (action.type) {
      case 'INCREASE':
        return { count: state.count + 1 };
      case 'DECREASE':
        return { count: state.count - 1 };
      case 'RESET':
        return { count: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>useReducer Demo</h1>
      <p>Giá trị count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREASE' })}>Tăng</button>
      <button onClick={() => dispatch({ type: 'DECREASE' })}>Giảm</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  )
}
