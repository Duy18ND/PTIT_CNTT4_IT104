import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const pram = useParams();
    console.log(pram);
    
  return (
    <div>
      <h1>id: {pram.id}</h1>
    </div>
  )
}
