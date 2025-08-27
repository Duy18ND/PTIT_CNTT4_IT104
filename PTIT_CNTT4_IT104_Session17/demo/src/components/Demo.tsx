import React, { useState, useEffect, useRef } from 'react'

type PropsType = {
  name?: string
  age?: number
}

type User = {
  name?: string
  age: number
  address: string
  date?: string
}

export default function Demo({ name = "Duy", age = 20 }: PropsType) {
  const [user, setUser] = useState<User>({
    name: "Duy",
    age: 20,
    address: "Hà Nội",
  })

  const handleClick = () => {
    setUser({
      ...user,
      name: "Đoàn mạnh duy",
      date: "28/07/2006",
    })
  }

  const [count, setCount] = useState<number>(0)
  const handleClickCount = () => {
    setCount(prev => prev + 1)
    setCount(prev => prev + 2)
    setCount(prev => prev + 3)
    setCount(prev => prev + 4)
  }

  const myRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    myRef.current?.focus()
  }, [])

  return (
    <div>
      <h2>Component Function</h2>
      <div>name: {name}</div>
      <div>age: {age}</div>
      <div>User: {JSON.stringify(user)}</div>
      <button onClick={handleClick}>Click</button>

      <div>count: {count}</div>
      <button onClick={handleClickCount}>Click count</button>

      <input type="text" ref={myRef} name="username" />
    </div>
  )
}
