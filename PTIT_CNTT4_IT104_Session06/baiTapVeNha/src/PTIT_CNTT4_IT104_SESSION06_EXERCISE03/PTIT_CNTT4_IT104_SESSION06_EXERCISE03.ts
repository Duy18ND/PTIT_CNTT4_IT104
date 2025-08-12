abstract class Animal {
    abstract sound(): void;
}

class Dog extends Animal {
    sound(): void {
        console.log("Dog: Woof! Woof!");
    }
}

class Cat extends Animal {
    sound(): void {
        console.log("Cat: Meow! Meow!");
    }
}

const dog: Animal = new Dog();
dog.sound();  

const cat: Animal = new Cat();
cat.sound();

