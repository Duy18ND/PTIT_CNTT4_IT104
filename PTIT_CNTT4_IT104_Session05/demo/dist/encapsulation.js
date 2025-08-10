class Student {
    //Thuoc tinh
    constructor(valueFullName, valueAge, valueAddress) {
        this.fullName = valueFullName;
        this.age = valueAge;
        this.address = valueAddress;
    }
    getInfo() {
        return `Xin chao ${this.fullName}, tuoi: ${this.age}, address ${this.address}`;
    }
    setAge(newAge) {
        this.age = newAge;
    }
}
let user1 = new Student("Doan manh duy", 20, "Ha Noi");
user1.setAge(22);
console.log(user1.getInfo());
