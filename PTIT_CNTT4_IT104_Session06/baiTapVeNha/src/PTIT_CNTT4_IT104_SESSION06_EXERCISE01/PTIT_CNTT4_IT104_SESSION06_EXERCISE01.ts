/*Định nghĩa lớp Rectangle kế thừa lớp Shape có thêm thuộc tính width và height.
getSize để in ra các kích cỡ của hình . */

abstract class Shape {
    protected name: string;

    constructor(name: string){
        this.name = name;
    }

    getName():string {
        return this.name;
    }

    //Tao lop truu tuong
    abstract getSize(): void;
}

class Rectangle extends Shape {
        private width: number;
        private height: number;

        constructor(name: string, width: number, height: number) {
            super(name);
            this.width = width;
            this.height = height;
        }

        getSize(): void {
            console.log(`width: ${this.width} - height: ${this.height}`);
        }
}
const rect = new Rectangle("Hinh chu nhat", 10, 20);
console.log(rect.getName());
rect.getSize();



