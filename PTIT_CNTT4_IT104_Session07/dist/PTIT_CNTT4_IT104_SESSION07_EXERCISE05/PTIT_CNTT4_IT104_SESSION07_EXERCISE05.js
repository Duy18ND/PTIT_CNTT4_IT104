class Account {
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login() { }
    ;
    logout() {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Dang xuat thanh cong!");
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status) {
            this.isLogin = true;
            console.log("Dang nhap thanh cong");
        }
        else {
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
