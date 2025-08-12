//Tạo abstruct class Animal
class Animal1 {
    constructor(name, age, category) {
        this.name = name;
        this.age = age;
        this.category = category;
    }
    sound() {
        return ``;
    }
    getDetail() {
        return ``;
    }
    move() {
        return ``;
    }
    feed() {
        return ``;
    }
}
//Tạo các class con kể thừa class Animal11
//Tạo thuộc tính cho thú có vú
class Mammal extends Animal1 {
    constructor(name, age, furColor) {
        super(name, age, furColor);
        this.name = name;
        this.age = age;
        this.furColor = furColor;
    }
    move() {
        return `Phuong thức di chuyển của động vật có vũ`;
    }
    getFurColor() {
        //Lấy màu lông của loài có vú
        return ` Màu lông của loài ${this.name} là: ${this.furColor}`;
    }
}
//Tạo thuộc tính cho loài chim
class Bird extends Animal1 {
    constructor(name, age, wingSpan) {
        super(name, age, wingSpan);
        this.name = name;
        this.age = age;
        this.wingSpan = wingSpan;
    }
    move() {
        return ` Phương thức di chuyển của loài chim`;
    }
    getWingpan() {
        //Lấy thông tin sải cánh của loài chim
        return ` Sải cánh của loài ${this.wingSpan}`;
    }
}
//Tạo thuộc tính cho loài bò sát
class Reptile extends Animal1 {
    constructor(name, age, venomous) {
        super(name, age, venomous);
        this.name = name;
        this.age = age;
        this.venomous = venomous;
    }
    move() {
        return `Phuong thức di chuyển vủa bò sát`;
    }
    getVenomous() {
        //Lấy thông tin loài bò sát đó có độc hay không
        return ` Loài bò sát ${this.name} có độc không: ${this.venomous}`;
    }
}
//TÍNH ĐA HÌNH
const animal = [
    new Bird("Black KITE", 2, 3),
    new Reptile("Rocodai", 2, true),
    new Mammal("DOG", 2, "Red"),
];
//Gọi phương thức
animal.forEach(item => {
    console.log(item.move());
});
//In thông tin của loài có lông
const new_animal = new Mammal("Con HELL", 1, "PINK");
console.log(new_animal.getFurColor());
