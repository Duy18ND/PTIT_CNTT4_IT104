class Account {
    public id: string;
    public userName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;

    constructor(id: string, userName: string, password: string, isLogin: boolean, role: string){
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login():void{};
    logout():void{
        if(this.isLogin){
            this.isLogin = false;
            console.log("Dang xuat thanh cong!");
        }
    }
}

class userAcc extends Account{
    private status: boolean;

    constructor(id: string, userName: string, password: string, isLogin: boolean, role: string, status: boolean){
        super(id, userName, password, isLogin, role);
        this.status = status;
    }

    override login(): void {
        if(this.status){
            this.isLogin = true;
            console.log("Dang nhap thanh cong");
        }else{
            console.log("Tai khoan da bi khoa");
        }
    }
}
const use1 = new userAcc("B24", "doan manh duy", "021ashd", true, "Hoc sinh", true);
use1.login();
use1.logout();

console.log("---------------------");
const use2 = new userAcc("B24", "doan manh duy", "021ashd", false, "Hoc sinh", false);
use2.login();
use2.logout();