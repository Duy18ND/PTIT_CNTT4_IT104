class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    getInfo() {
        return `
        Name: ${this.name}
        Company: ${this.company}
        Phone: ${this.phone}
        `;
    }
}
const us1 = new Employee("Duy", "Duy18nd", "0336620883");
const us2 = new Employee("Khanh", "Poodle", "03366321312");
const us3 = new Employee("Tu", "ND", "0232120883");
const arre = [];
arre.push(us1, us2, us3);
function printInfo(employee) {
    for (let i of employee) {
        console.log(i.getInfo());
    }
}
printInfo(arre);
