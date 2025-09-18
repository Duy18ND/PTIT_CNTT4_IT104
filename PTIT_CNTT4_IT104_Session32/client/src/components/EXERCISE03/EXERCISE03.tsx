import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function EXERCISE03() {
    const counter = useSelector((data:any) => data.EXERCISE03.count);
    const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={()=> dispatch({type: "INCREASE"})}>Tăng</button>
        <button onClick={()=> dispatch({type: "REDUCE"})}>Giảm</button>
      </div>
    </div>
  )
}
