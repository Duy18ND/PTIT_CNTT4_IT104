class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`name: ${this.name}`);
    }
}
class Student extends Person {
    constructor(id, name) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`ID: ${this.id} - Name: ${this.name}`);
    }
}
const u3 = new Student(1, "Duy");
u3.displayInfo();
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Teacher Name: ${this.name} - subject: ${this.subject}`);
    }
}
const u4 = new Teacher("Duy", "C++");
u4.displayInfo();
