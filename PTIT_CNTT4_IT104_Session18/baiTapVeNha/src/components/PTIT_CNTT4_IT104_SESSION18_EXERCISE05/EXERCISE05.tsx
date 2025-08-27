import React, { useReducer } from 'react'
type State = {
    text: string
}
type Action = {
    type: "SET",
    payload: string
}

const reducer = (state: State, action: Action):State => {
    switch(action.type){
        case "SET":
            return {text: action.payload}
        default:
            return state;
    }
}
export default function EXERCISE05() {
    const [state, dispatch] = useReducer(reducer, {text: ""});
    const handleChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: "SET", payload: e.target.value});
    });
  return (
    <div>
      <h2>{state.text}</h2>
      <input type="text" onChange={handleChange} />
    </div>
  )
}
