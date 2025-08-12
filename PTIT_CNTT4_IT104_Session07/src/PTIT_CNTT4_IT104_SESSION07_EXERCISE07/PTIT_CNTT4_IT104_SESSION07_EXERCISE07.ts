class Accountt{
    public accountNumber: string;
    protected balance: number;
    protected history: string[];
    protected status: boolean;

    constructor(accountNumber: string, balance: number = 0){
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = true;
    }

    deposit(value: number){
        if(value > 0){
            this.balance += value;
            this.history.push(`Nap +${value} - So du hien tai: ${this.balance}`);
        }else{
            console.log("Nap tien toi thieu phai 1000");
        }
    }

    withdraw(value: number): void {
        if (value > 0 && value <= this.balance) {
            this.balance -= value;
            this.history.push(`Rut: -${value} | So du: ${this.balance}`);
        } else {
            console.log("Rut khong hop le!");
        }
    }

    showHistory():void{
        console.log("Lich su giao dich");
        this.history.forEach((item, index) =>{
            console.log(`-${index + 1}: ${item}`);
        });
    }
}

class SavingAccount extends Accountt{
    interestRate: number;

    constructor(accountNumber: string, balance: number = 0, interestRate: number){
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    withdraw(value: number): void {
        if(value > 0 && value <= this.balance){
            this.balance -= value;
            this.history.push(`Rut: -${value} | So du: ${this.balance}`);
        }else{
            console.log("Rut khong hop le hoac so du vuot qua so du");
        }
    }
}

const User1 = new SavingAccount("12396123", 370000,0.05);
User1.deposit(123456);
User1.withdraw(1000);
User1.showHistory();