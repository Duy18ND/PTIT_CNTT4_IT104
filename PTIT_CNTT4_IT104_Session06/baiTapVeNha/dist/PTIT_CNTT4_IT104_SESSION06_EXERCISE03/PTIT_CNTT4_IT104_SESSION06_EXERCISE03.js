class Animal {
}
class Dog extends Animal {
    sound() {
        console.log("Dog: Woof! Woof!");
    }
}
class Cat extends Animal {
    sound() {
        console.log("Cat: Meow! Meow!");
    }
}
const dog = new Dog();
dog.sound();
const cat = new Cat();
cat.sound();
