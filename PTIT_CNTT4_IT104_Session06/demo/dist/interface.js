//Giống như bản hợp đồng và các class khi triển khai tuân theo 
class A {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getInfo() {
        return `Thong tin sản phẩm name: ${this.name} | price: ${this.price}`;
    }
}
