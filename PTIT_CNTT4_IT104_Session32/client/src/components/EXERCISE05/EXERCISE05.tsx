import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function EXERCISE05() {
    const changeState = useSelector((data) => data.EXERCISE05.name);
    const dispatch = useDispatch();
  return (
    <div>
      <h1>{changeState}</h1>
      <button onClick={() => dispatch({type: "CHANGE"})}>Click</button>
    </div>
  )
}
