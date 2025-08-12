/*Phương thức printType để in ra loại công việc 
Phương thức abstract calculateSalary để tính lương khi làm công việc đó.
Định nghĩa lớp PartimeJob và lớp FulltimeJob kế thừa lớp Job. 
Lớp PartimeJob có thêm thuộc tính workingHour.
Phương thức calculateSalary để tính lương công việc.
 Lương fulltime sẽ mặc định là 10.000.000, lương partime sẽ được tính theo công thức 30.000 * workingHour.
Yêu cầu khởi tạo 2 đối tượng ParttimeJob và FulltimeJob và thực hiện in ra thông tin lương của 2 dối tượng đó */
abstract class Job {
    protected type: string;

    constructor(type: string){
        this.type = type;
    }
    printType(){
        return `Loai cong viec ${this.type}`;
    }

    abstract calculateSalary(): string;
}

class PartimeJob extends Job {
    protected workingHour: number;

    constructor(type: string, workingHour: number){
        super(type);
        this.workingHour = workingHour;
    }

    calculateSalary(): string {
        const totalSalary = 30000 * this.workingHour;
        return `Luong partTime: ${totalSalary}`;
    }
}

class FulltimeJob extends Job {
    constructor(type: string){
        super(type);
    }
    calculateSalary(): string {
        return `Luong fullTime: 10000000`;
    }
}

const user1 = new PartimeJob("Sale", 2);

console.log(user1.printType());
console.log(user1.calculateSalary());

const user2 = new FulltimeJob("Ban o to");

console.log(user2.printType());
console.log(user2.calculateSalary());