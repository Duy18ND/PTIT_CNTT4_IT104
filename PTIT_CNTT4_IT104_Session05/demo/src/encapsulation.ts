class Student{
    public fullName: string;
    private age: number;
    protected address: string

    //Thuoc tinh
    constructor(valueFullName:string, valueAge:number, valueAddress: string){
        this.fullName = valueFullName;
        this.age = valueAge;
        this.address = valueAddress
    }
    
    getInfo(): string{
        return `Xin chao ${this.fullName}, tuoi: ${this.age}, address ${this.address}`;
    }

    setAge(newAge: number){
        this.age = newAge;
    } 
}

let user1 = new Student("Doan manh duy", 20, "Ha Noi");
user1.setAge(22);
console.log(user1.getInfo());
