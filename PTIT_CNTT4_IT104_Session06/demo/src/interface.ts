//Giống như bản hợp đồng và các class khi triển khai tuân theo 

interface _Product{
    name: string,
    price: number,
    getInfo():string
}

class A implements _Product{
    name: string;
    price: number;
    constructor(name:string, price: number){
        this.name = name;
        this.price = price;
    }
    getInfo(): string {
        return `Thong tin sản phẩm name: ${this.name} | price: ${this.price}`;
    }
}