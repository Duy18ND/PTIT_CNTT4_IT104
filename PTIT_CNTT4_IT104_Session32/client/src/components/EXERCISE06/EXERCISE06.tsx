import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function EXERCISE06() {
    const darkOrLight = useSelector((data) => data.EXERCISE06.bg);
    const dispatch = useDispatch();

  return (
    <div style={{backgroundColor: darkOrLight, width: "200px", height: "200px" }}>
      <input type="checkbox" checked={darkOrLight === "#000000"} onChange={() => dispatch({type: "TOGGLE"})} />
    </div>
  )
}
