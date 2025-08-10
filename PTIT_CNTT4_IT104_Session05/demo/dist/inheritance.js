// Tính kế thừa
// 1 class con khi kế thừa class cha thì sẽ có các thuộc tính và phương thức của class cha
class Anime {
    constructor(valueName) {
        this.name = valueName;
    }
    sound() {
        return `Tiếng kêu của ${this.name}`;
    }
}
// Kế thừa extends
class Dog extends Anime {
    sound() {
        return `Tiếng kêu của chó: ${this.name}`;
    }
}
// Truyền giá trị
const dog1 = new Dog("Gâu gâu");
console.log(dog1.sound());
//Ke thua extends
class Cat extends Anime {
    sound() {
        return `Tiếng kêu của mèo: ${this.name}`;
    }
}
//Truyen gia tri
const cat1 = new Cat("Meo meo");
console.log(cat1.sound());
