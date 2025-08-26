import React, {useState} from 'react'

export default function EXERCISE02() {
    const [product, setProduct] = useState({
        id: 1,
        name: "Iphone 16 ProMax",
        price: 1200,
        quantity: 2
    });

  return (
    <div>
        <h2>Thông tin sản phẩm</h2>
        <div>ID: {product.id}</div>
        <div>Name: {product.name}</div>
        <div>Price: {product.price}$</div>
        <div>Quantity: {product.quantity}</div>
    </div>
  )
}
