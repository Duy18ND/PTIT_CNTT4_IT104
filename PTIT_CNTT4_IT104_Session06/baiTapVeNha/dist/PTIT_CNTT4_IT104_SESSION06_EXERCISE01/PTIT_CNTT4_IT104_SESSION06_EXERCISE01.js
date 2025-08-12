/*Định nghĩa lớp Rectangle kế thừa lớp Shape có thêm thuộc tính width và height.
getSize để in ra các kích cỡ của hình . */
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`width: ${this.width} - height: ${this.height}`);
    }
}
const rect = new Rectangle("Hinh chu nhat", 10, 20);
console.log(rect.getName());
rect.getSize();
