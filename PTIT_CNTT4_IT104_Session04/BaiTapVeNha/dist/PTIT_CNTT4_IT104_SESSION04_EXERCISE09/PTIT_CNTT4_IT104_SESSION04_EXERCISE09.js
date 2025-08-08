function VNDD(amount) {
    return amount.toLocaleString("vi-VN") + " VND";
}
function calcOrderTotal(order) {
    return order.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}
function calcInvoiceTotal(invoice) {
    return invoice.orders.reduce((total, order) => total + calcOrderTotal(order), 0);
}
function printInvoice(invoice) {
    console.log(`===== HÓA ĐƠN #${invoice.invoiceId} =====`);
    console.log("======================================");
    invoice.orders.forEach(order => {
        console.log(`\nĐƠN HÀNG #${order.orderId} - Khách: ${order.customerName}`);
        console.log(`Địa chỉ giao: ${order.deliveryAddress}`);
        console.log("Sản phẩm:");
        order.items.forEach(item => {
            const itemTotal = item.product.price * item.quantity;
            const noteText = item.note ? ` (ghi chú: ${item.note})` : "";
            console.log(`  - ${item.product.name} x ${item.quantity} - ${VNDD(item.product.price)} -> ${VNDD(itemTotal)}${noteText}`);
        });
        console.log(`Tổng đơn: ${VNDD(calcOrderTotal(order))}`);
        console.log(`Trạng thái: ${order.isPaid ? "ĐÃ THANH TOÁN" : "CHƯA THANH TOÁN"}`);
        console.log("----------------------------------------");
    });
    console.log(`TỔNG CỘNG HÓA ĐƠN: ${VNDD(calcInvoiceTotal(invoice))}`);
    console.log("======================================");
}
// Dữ liệu mẫu
const product1 = { id: "P001", name: "Áo sơ mi", price: 250000 };
const product2 = { id: "P002", name: "Quần jean", price: 400000 };
const product3 = { id: "P003", name: "Váy hoa", price: 700000 };
const order1 = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    deliveryAddress: "Hà Nội",
    isPaid: true,
    items: [
        { product: product1, quantity: 2 },
        { product: product2, quantity: 1 }
    ]
};
const order2 = {
    orderId: "ORD002",
    customerName: "Trần Thị B",
    deliveryAddress: "Hồ Chí Minh",
    isPaid: false,
    items: [
        { product: product3, quantity: 1, note: "size L" }
    ]
};
const invoice = {
    invoiceId: "INV001",
    orders: [order1, order2]
};
printInvoice(invoice);
