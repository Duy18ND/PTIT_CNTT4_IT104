abstract class Person{
    public name: string;
    
    constructor(name: string) {
        this.name = name;
    }
    displayInfo(){
        console.log(`name: ${this.name}`);
    }
}

class Student extends Person{
    private id: number | string;

    constructor (id: number | string, name: string){
        super(name);
        this.id = id;
    }

    displayInfo(): void {
        console.log(`ID: ${this.id} - Name: ${this.name}`);
    }
}
const u3 = new Student(1, "Duy");

u3.displayInfo();

class Teacher extends Person{
    private subject: string;

    constructor(name: string, subject: string){
        super(name);
        this.subject = subject;
    }
    displayInfo(): void {
        console.log(`Teacher Name: ${this.name} - subject: ${this.subject}`);
    }
}
const u4 = new Teacher("Duy", "C++");
u4.displayInfo();