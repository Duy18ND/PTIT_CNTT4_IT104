export type Product = {
  id: number;
  name: string;
  price: string;
  des: string;
};

export const products: Product[] = [
  { id: 1, name: "iPhone 16 Pro Max", price: "34,990,000 VND", des: "Hiệu năng mạnh mẽ, camera siêu nét" },
  { id: 2, name: "Samsung Galaxy S24 Ultra", price: "32,490,000 VND", des: "Màn hình sắc nét, bút S-Pen tiện lợi" },
  { id: 3, name: "Xiaomi 14 Pro", price: "22,990,000 VND", des: "Cấu hình cao, giá thành hợp lý" },
  { id: 4, name: "Oppo Find X7", price: "19,990,000 VND", des: "Thiết kế mỏng nhẹ, sạc siêu nhanh" },
  { id: 5, name: "Vivo X100", price: "18,490,000 VND", des: "Chụp ảnh đẹp, pin lâu" },
];
