import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const param = useParams();
    console.log("param",param);
  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
    </div>
  )
}
