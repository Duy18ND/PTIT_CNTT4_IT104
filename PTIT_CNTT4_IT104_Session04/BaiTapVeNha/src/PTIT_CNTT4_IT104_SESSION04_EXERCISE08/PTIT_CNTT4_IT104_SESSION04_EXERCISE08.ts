type Product = {
  readonly id: string;
  name: string;
  price: number;
};

type OrderItem = {
  product: Product;
  quantity: number;
};

type Order = {
  orderId: string;
  customerName: string;
  items: OrderItem[];
  note?: string;
};

function VND(amount: number): string {
  return amount.toLocaleString("vi-VN") + " VND";
}

function total(order: Order): number {
  return order.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
}

function printOrder(order: Order): void {
  console.log(`===== ĐƠN HÀNG #${order.orderId} =====`);
  console.log(`Khách hàng: ${order.customerName}`);
  console.log(`Sản phẩm:`);

  order.items.forEach((item) => {
    const itemTotal = item.product.price * item.quantity;
    console.log(
      `- ${item.product.name} (đơn giá: ${VND(item.product.price)}) × ${item.quantity} → ${VND(itemTotal)}`
    );
  });

  console.log("---------------------------");
  console.log(`Tổng cộng: ${VND(total(order))}`);

  if (order.note) {
    console.log(`Ghi chú: ${order.note}`);
  }
  console.log("===========================");
}

const shirt: Product = { id: "P001", name: "Áo sơ mi", price: 250000 };
const pants: Product = { id: "P002", name: "Quần tây", price: 400000 };

const orderExample: Order = {
  orderId: "ORD001",
  customerName: "Đoàn Mạnh Duy",
  items: [
    { product: shirt, quantity: 2 },
    { product: pants, quantity: 1 },
  ],
  note: "Giao sau 6h",
};

printOrder(orderExample);