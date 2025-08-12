class MenuItem {
  public id: string;
  public name: string;
  public price: number;

  constructor(id: string, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class Table {
  public id: string;
  public capacity: number;
  public available: boolean;

  constructor(id: string, capacity: number) {
    this.id = id;
    this.capacity = capacity;
    this.available = true;
  }
}

class Reservation {
  public id: string;
  public customerName: string;
  public tableId: string;

  constructor(id: string, customerName: string, tableId: string) {
    this.id = id;
    this.customerName = customerName;
    this.tableId = tableId;
  }
}

class Order {
  public id: string;
  public tableId: string;
  public items: MenuItem[];

  constructor(id: string, tableId: string, items: MenuItem[]) {
    this.id = id;
    this.tableId = tableId;
    this.items = items;
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

class Restaurant {
  public menu: MenuItem[];
  public tables: Table[];
  public reservations: Reservation[];
  public orders: Order[];

  private reservationCounter = 0;
  private orderCounter = 0;

  constructor() {
    this.menu = [];
    this.tables = [];
    this.reservations = [];
    this.orders = [];
  }

  addMenuItem(item: MenuItem): void {
    this.menu.push(item);
    console.log(`Da them mon: ${item.name} vao menu.`);
  }

  addTable(table: Table): void {
    this.tables.push(table);
    console.log(`Da them ban: ${table.id} voi suc chua ${table.capacity}.`);
  }

  makeReservation(customerName: string, tableId: string): void {
    const table = this.tables.find(t => t.id === tableId);
    if (!table) {
      console.log(`Khong tim thay ban co id: ${tableId}`);
      return;
    }
    if (!table.available) {
      console.log(`Ban ${tableId} da duoc dat.`);
      return;
    }
    this.reservationCounter++;
    const newReservation = new Reservation(this.reservationCounter.toString(), customerName, tableId);
    this.reservations.push(newReservation);
    table.available = false;
    console.log(`Dat ban thanh cong cho ${customerName} tai ban ${tableId}.`);
  }

  placeOrder(tableId: string, items: MenuItem[]): void {
    const table = this.tables.find(t => t.id === tableId);
    if (!table) {
      console.log(`Khong tim thay ban co id: ${tableId}`);
      return;
    }
    if (table.available) {
      console.log(`Ban ${tableId} chua duoc dat. Khong the dat mon.`);
      return;
    }
    this.orderCounter++;
    const newOrder = new Order(this.orderCounter.toString(), tableId, items);
    this.orders.push(newOrder);
    console.log(`Da dat mon cho ban ${tableId}, don hang #${newOrder.id}`);
  }

  generateBill(tableId: string): void {
    const table = this.tables.find(t => t.id === tableId);
    if (!table) {
      console.log(`Khong tim thay ban co id: ${tableId}`);
      return;
    }
    if (table.available) {
      console.log(`Ban ${tableId} hien dang trong.`);
      return;
    }
    const ordersForTable = this.orders.filter(o => o.tableId === tableId);
    if (ordersForTable.length === 0) {
      console.log(`Ban ${tableId} chua co don hang nao.`);
      return;
    }

    const total = ordersForTable.reduce((sum, order) => sum + order.getTotal(), 0);
    console.log(`Tong tien ban ${tableId} phai tra la: ${total} VND.`);

    table.available = true;
    this.reservations = this.reservations.filter(r => r.tableId !== tableId);
    this.orders = this.orders.filter(o => o.tableId !== tableId);

    console.log(`Ban ${tableId} da duoc thanh toan va san sang don khach tiep theo.`);
  }
}


const myRestaurant = new Restaurant();

myRestaurant.addMenuItem(new MenuItem("1", "Pho", 50000));
myRestaurant.addMenuItem(new MenuItem("2", "Banh Mi", 30000));
myRestaurant.addMenuItem(new MenuItem("3", "Ca Phe", 20000));

myRestaurant.addTable(new Table("T1", 4));
myRestaurant.addTable(new Table("T2", 2));
myRestaurant.addTable(new Table("T3", 6));

myRestaurant.makeReservation("Khach A", "T1");

myRestaurant.makeReservation("Khach B", "T2");

myRestaurant.makeReservation("Khach C", "T1");

myRestaurant.placeOrder("T1", [
  new MenuItem("1", "Pho", 50000),
  new MenuItem("3", "Ca Phe", 20000),
]);

myRestaurant.placeOrder("T2", [
  new MenuItem("2", "Banh Mi", 30000),
]);

myRestaurant.generateBill("T1");

myRestaurant.makeReservation("Khach C", "T1");

myRestaurant.placeOrder("T1", [
  new MenuItem("2", "Banh Mi", 30000),
]);

myRestaurant.generateBill("T1");