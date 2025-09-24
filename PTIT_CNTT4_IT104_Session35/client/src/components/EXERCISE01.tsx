import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { Counter } from '../utils/Type';
import { decrement, increment, reset } from '../store/slice/CounterSlice';

export default function EXERCISE01() {
    const result = useSelector((data: Counter) => data.EXE01.value);
    const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {result}</h1>
      <button onClick={() => dispatch(increment())}>Tăng</button>
      <button onClick={() => dispatch(decrement())}>Giảm</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}
