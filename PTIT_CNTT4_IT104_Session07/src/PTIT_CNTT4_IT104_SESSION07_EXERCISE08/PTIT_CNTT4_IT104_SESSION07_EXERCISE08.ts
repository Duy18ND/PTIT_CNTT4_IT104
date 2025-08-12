class Accounttt{
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

class CheckingAccount extends Accounttt{
    overdraftLimit: number;

    constructor(accountNumber: string, balance: number = 0, overdraftLimit: number){
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(value: number): void {
        if(value < 0){
            console.log("So tien rut khong hop le!");
            return;
        }
        
        if (value <= this.balance + this.overdraftLimit) {
            this.balance -= value;
            this.history.push(`Rut: -${value} | So du: ${this.balance}`);
        } else {
            console.log("Vuot qua gioi han overdraftLimit");
        }
    }
}

let checkingAcc = new CheckingAccount("987654321", 1000, 500);

checkingAcc.deposit(300);  
checkingAcc.withdraw(1200);
checkingAcc.withdraw(400);
checkingAcc.withdraw(900);   
checkingAcc.showHistory();