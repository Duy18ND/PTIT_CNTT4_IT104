import React, { useReducer } from 'react'
import './EXERCISE08.css'

type State = {
  Name: string,
  Email: string,
  isLogin: boolean
}

type Action = {
  type: string,
  payload: string
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, Name: action.payload, isLogin: true }
    case "SET_EMAIL":
      return { ...state, Email: action.payload, isLogin: true }
    default:
      return state
  }
}

export default function EXERCISE08() {
  const [state, dispatch] = useReducer(reducer, { Name: "", Email: "", isLogin: false })

  return (
    <div className='container08'>
      <div className='container_Child08'>
        <h2>User Information Form</h2>
        <form>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            value={state.Name}
            onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
          />

          <label htmlFor="email">Email: </label>
          <input
            type="text"
            value={state.Email}
            onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
          />
        </form>

        {state.isLogin && (
          <div className='container_Info'>
            <div className='container_Info_Child'>
              <h3>Thông tin người dùng</h3>
              <p>
                Name: <span>{state.Name || "(Chưa nhập)"}</span>
              </p>
              <p>
                Email: <span>{state.Email || "(Chưa nhập)"}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
