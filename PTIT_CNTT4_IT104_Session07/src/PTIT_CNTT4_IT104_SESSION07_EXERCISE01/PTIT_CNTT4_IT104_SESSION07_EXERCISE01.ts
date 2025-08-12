class Employee{
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string){
        this.name = name;
        this. company = company;
        this.phone = phone;
    }

    printInfo():string{
        return `name: ${this.name} | company: ${this.company} | phone: ${this.phone}`;
    }
}

class Manager extends Employee {
    teamSize: number;

    constructor(name: string, company: string, phone: string, teamSize: number){
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo(): string {
        super.printInfo();
        return `So luong thanh vien: ${this.teamSize}`;
    }
}

const user1 = new Employee("Duy","DMD", "0336620732");
console.log(user1.printInfo());

const user2 = new Manager("Duy","DMD", "0336620732",3);
console.log(user2.printInfo());

