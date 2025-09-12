import React from 'react'
import { useParams } from 'react-router-dom'

export default function StudentDetail() {
    const pram = useParams();
    console.log(pram);
  return (
    <div>
      <h1>name: {pram.name}</h1>
    </div>
  )
}
