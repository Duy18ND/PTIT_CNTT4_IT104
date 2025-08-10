class Vehiclee{
    public readonly id: number;
    public name: string;
    protected yearr: number;
    private companyy: string;

    constructor(id: number , name: string, yearr: number, companyy: string){
        this.id = id;
        this.name = name;
        this.yearr = yearr;
        this.companyy = companyy;
    }

    getInfo():string{
        return `
        ID: ${this.id}
        name: ${this.name}
        yearr: ${this.yearr}
        company: ${this.companyy}
        `
    }
}

const user = new Vehiclee(1,"Duy",2020,"HaNoi");

console.log(user.getInfo());
