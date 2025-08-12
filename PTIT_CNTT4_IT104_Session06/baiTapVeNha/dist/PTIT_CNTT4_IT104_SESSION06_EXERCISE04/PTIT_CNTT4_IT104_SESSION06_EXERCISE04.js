class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectanglee {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(5);
console.log("Circle Area:", circle.calculateArea().toFixed(2));
console.log("Circle Perimeter:", circle.calculatePerimeter().toFixed(2));
const rectangle = new Rectanglee(4, 6);
console.log("Rectanglee Area:", rectangle.calculateArea().toFixed(2));
console.log("Rectanglee Perimeter:", rectangle.calculatePerimeter().toFixed(2));
