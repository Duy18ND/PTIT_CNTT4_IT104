import React, { useReducer } from 'react'
type State = {
    gender: string
}
type Action = {
    type: "SET_GENDER",
    payload: string
}
const reducer = (state: State, action: Action):State => {
    switch(action.type){
        case "SET_GENDER":

            return {gender: action.payload}
        default:
            return state;
    }
}
export default function EXERCISE06() {
    const [state, dispatch] = useReducer(reducer, {gender: "Nam"});
    const handleChange = ((e: React.ChangeEvent<HTMLInputElement>)=> {
        dispatch({type: "SET_GENDER", payload: e.target.value});
    });
  return (
    <div>
        <h2>{state.gender}</h2>
      <input type="radio" onChange={handleChange} value={"Nam"} checked={state.gender === "Nam"}/>
      <label htmlFor="">Nam</label>

      <input type="radio" onChange={handleChange} value={"Nữ"} checked={state.gender === "Nữ"}/>
      <label htmlFor="">Nữ</label>
      
      <input type="radio" onChange={handleChange} value={"Khác"} checked={state.gender === "Khác"}/>
      <label htmlFor="">Khác</label>
    </div>
  )
}
