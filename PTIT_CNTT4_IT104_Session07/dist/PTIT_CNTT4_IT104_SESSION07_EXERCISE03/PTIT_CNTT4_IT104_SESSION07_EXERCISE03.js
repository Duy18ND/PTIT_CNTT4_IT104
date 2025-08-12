class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Name: ${this.name}`);
    }
}
class Cat extends Animal {
    makeNoise() {
        super.printName();
        console.log("Mew Mew");
    }
}
class Dog extends Animal {
    makeNoise() {
        super.printName();
        console.log("Gau Gau");
    }
}
const cat = new Cat("Bengol");
cat.makeNoise();
const dog = new Dog("Chihuahua");
dog.makeNoise();
