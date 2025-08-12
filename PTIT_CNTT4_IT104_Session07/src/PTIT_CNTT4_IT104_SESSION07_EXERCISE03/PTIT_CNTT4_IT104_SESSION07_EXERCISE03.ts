abstract class Animal {
    public name: string;

    constructor(name: string){
        this.name = name;
    }

    abstract makeNoise():void;

    printName():void {
        console.log(`Name: ${this.name}`);
    }
}

class Cat extends Animal{
    makeNoise():void {
        super.printName();
        console.log("Mew Mew");
        
    }
}

class Dog extends Animal{
    makeNoise():void {
        super.printName();
        console.log("Gau Gau");
        
    }
}

const cat = new Cat("Bengol");
cat.makeNoise();

const dog = new Dog("Chihuahua");
dog.makeNoise();