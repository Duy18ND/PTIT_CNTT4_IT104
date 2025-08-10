class Vehicle {
    name: string;
    year: number;
    company: string;

    constructor(name: string, year: number, company: string){
        this.name = name;
        this.year = year;
        this.company = company;
    }

    getInfo():string{
        return `
        Ten phuong tien: ${this.name}
        Nam san xuat: ${this.year}
        Hang xe: ${this.company}`;
    }
}

const vehicle1 = new Vehicle("VF5",2020, "Vinfart");
const vehicle2 = new Vehicle("Mec",2025, "Mec");
console.log(vehicle1.getInfo());
console.log(vehicle2.getInfo());

