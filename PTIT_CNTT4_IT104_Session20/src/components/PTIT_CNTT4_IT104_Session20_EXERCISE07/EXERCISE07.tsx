import React, { useReducer } from 'react'

type CountState = {
  count: number
}

type Action = 
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" }

const reducer = (state: CountState, action: Action): CountState => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 }
    case "DECREMENT":
      return { count: state.count - 1 }
    default:
      return state
  }
}

export default function EXERCISE07() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div>
      <h2>Số đếm: {state.count}</h2>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Tăng</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Giảm</button>
      </div>
    </div>
  )
}
