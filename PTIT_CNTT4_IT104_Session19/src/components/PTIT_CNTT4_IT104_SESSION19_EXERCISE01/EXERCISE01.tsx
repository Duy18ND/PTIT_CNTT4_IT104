import React from 'react'
type Product = {
    id: number,
    name: string,
    price: number,
    quantity: number
}

export default function EXERCISE01() {
    const ProductLsit: Product[] = [
        {
            id: 1,
            name: "Phở",
            price: 35000,
            quantity: 3
        },
        
        {
            id: 2,
            name: "Bún bò",
            price: 40000,
            quantity: 1
        },

        {
            id: 3,
            name: "Cơm rang",
            price: 30000,
            quantity: 2
        },
    ];
    const totalPrice = ProductLsit.reduce((sum, item)=> sum + item.price * item.quantity, 0);
  return (
    <div>
        <h3>Danh sách món ăn</h3>
        <ul>
            {ProductLsit.map((item, index) => (
                <li key={index}>{item.name} - {item.price.toLocaleString()}VNĐ - x{item.quantity}</li>
            ))}
        </ul>
        <div>Tổng đơn hàng: {totalPrice.toLocaleString()} VNĐ</div>
    </div>
  )
}
