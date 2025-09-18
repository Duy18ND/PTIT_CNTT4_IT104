import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function EXERCISE04() {
    const random = useSelector((data) => data.EXERCISE04.random);
    const dispatch = useDispatch();
  return (
    <div>
      <h1>Random: {random}</h1>
      <button onClick={() => dispatch({type: "RANDOM"})}>Click</button>
    </div>
  )
}
