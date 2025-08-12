class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        return `name: ${this.name} | company: ${this.company} | phone: ${this.phone}`;
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        return `So luong thanh vien: ${this.teamSize}`;
    }
}
const user1 = new Employee("Duy", "DMD", "0336620732");
console.log(user1.printInfo());
const user2 = new Manager("Duy", "DMD", "0336620732", 3);
console.log(user2.printInfo());
