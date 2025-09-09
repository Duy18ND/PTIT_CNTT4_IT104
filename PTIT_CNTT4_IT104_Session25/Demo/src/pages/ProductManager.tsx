import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "iphone15",
    price: 5000,
  },
  {
    id: 2,
    name: "iphone16",
    price: 15000,
  },
  {
    id: 3,
    name: "iphone16 pro",
    price: 25000,
  },
];
export default function ProductManager() {
  const [products, setProducts] = useState<any>(data);
  const navigate= useNavigate();
  const handleClick=(id:any)=>{
        console.log("id",id);
        navigate(`/admin/product/${id}`)
        
  }
  return (
    <div>
      Trang quản lý sản phẩm!
      <h1> DANH SÁCH SẢN PHẨM </h1>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên Sản Phẩm</th>
            <th>Gía</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item:any,index:number) => {
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><button onClick={()=>handleClick(item.id)}>Xem chi tiết</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}