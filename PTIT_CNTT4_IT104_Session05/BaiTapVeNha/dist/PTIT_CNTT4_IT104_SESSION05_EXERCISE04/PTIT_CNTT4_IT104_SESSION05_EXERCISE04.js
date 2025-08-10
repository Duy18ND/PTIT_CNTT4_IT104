class Vehiclee {
    constructor(id, name, yearr, companyy) {
        this.id = id;
        this.name = name;
        this.yearr = yearr;
        this.companyy = companyy;
    }
    getInfo() {
        return `
        ID: ${this.id}
        name: ${this.name}
        yearr: ${this.yearr}
        company: ${this.companyy}
        `;
    }
}
const user = new Vehiclee(1, "Duy", 2020, "HaNoi");
console.log(user.getInfo());
