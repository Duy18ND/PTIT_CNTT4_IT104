import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  product_name: string;
  price: number;
  quantity: number;
  created_at: string;
};

export default function EXERCISE02() {
  const [products, setProducts] = useState<Product[]>([]);

  const getAllProduct = async () => {
    try {
      const res = await fetch("http://localhost:8080/products");
      if (!res.ok) throw new Error("Lỗi khi gọi API");
      const data: Product[] = await res.json();
      console.log("Danh sách sản phẩm:", data);
      setProducts(data);
    } catch (error) {
      console.error("Không thể lấy dữ liệu:", error);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <strong>{item.product_name}</strong> - {item.price.toLocaleString()} VND
          </li>
        ))}
      </ul>
    </div>
  );
}
