type ProductList = {
  readonly id: string;
  name: string;
  price: number;
};

type OrderItemm = {
  product: ProductList;
  quantity: number;
  note?: string;
};

type Orderr = {
  orderId: string;
  customerName: string;
  items: OrderItemm[];
  deliveryAddress: string;
  isPaid: boolean;
};

type Invoice = {
  invoiceId: string;
  orders: Orderr[];
};

function VNDD(amount: number): string {
  return amount.toLocaleString("vi-VN") + " VND";
}

function calcOrderTotal(order: Orderr): number {
  return order.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
}

function calcInvoiceTotal(invoice: Invoice): number {
  return invoice.orders.reduce(
    (total, order) => total + calcOrderTotal(order),
    0
  );
}

function printInvoice(invoice: Invoice): void {
  console.log(`===== HÓA ĐƠN #${invoice.invoiceId} =====`);
  console.log("======================================");

  invoice.orders.forEach(order => {
    console.log(`\nĐƠN HÀNG #${order.orderId} - Khách: ${order.customerName}`);
    console.log(`Địa chỉ giao: ${order.deliveryAddress}`);
    console.log("Sản phẩm:");

    order.items.forEach(item => {
      const itemTotal = item.product.price * item.quantity;
      const noteText = item.note ? ` (ghi chú: ${item.note})` : "";
      console.log(
        `  - ${item.product.name} x ${item.quantity} - ${VNDD(item.product.price)} -> ${VNDD(itemTotal)}${noteText}`
      );
    });

    console.log(`Tổng đơn: ${VNDD(calcOrderTotal(order))}`);
    console.log(`Trạng thái: ${order.isPaid ? "ĐÃ THANH TOÁN" : "CHƯA THANH TOÁN"}`);
    console.log("----------------------------------------");
  });

  console.log(`TỔNG CỘNG HÓA ĐƠN: ${VNDD(calcInvoiceTotal(invoice))}`);
  console.log("======================================");
}

// Dữ liệu mẫu
const product1: ProductList = { id: "P001", name: "Áo sơ mi", price: 250000 };
const product2: ProductList = { id: "P002", name: "Quần jean", price: 400000 };
const product3: ProductList = { id: "P003", name: "Váy hoa", price: 700000 };

const order1: Orderr = {
  orderId: "ORD001",
  customerName: "Nguyễn Văn A",
  deliveryAddress: "Hà Nội",
  isPaid: true,
  items: [
    { product: product1, quantity: 2 },
    { product: product2, quantity: 1 }
  ]
};

const order2: Orderr = {
  orderId: "ORD002",
  customerName: "Trần Thị B",
  deliveryAddress: "Hồ Chí Minh",
  isPaid: false,
  items: [
    { product: product3, quantity: 1, note: "size L" }
  ]
};

const invoice: Invoice = {
  invoiceId: "INV001",
  orders: [order1, order2]
};

printInvoice(invoice);
