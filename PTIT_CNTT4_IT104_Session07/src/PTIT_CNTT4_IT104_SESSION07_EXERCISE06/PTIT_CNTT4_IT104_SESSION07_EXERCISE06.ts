class _Account {
    public id: string;
    public userName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;

    constructor(id: string, userName: string, password: string, isLogin: boolean, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }

    login(): void { }

    logout(): void {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Dang nhap thanh cong!");
        }
    }
}

class _userAcc extends _Account {
    private status: "active" | "banned";

    constructor(
        id: string,
        userName: string,
        password: string,
        isLogin: boolean,
        role: string,
        status: "active" | "banned"
    ) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }

    override login(): void {
        if (this.status === "active") {
            this.isLogin = true;
            console.log("Dang nhap thanh cong");
        } else {
            console.log("Tai khoan da bi khoa");
        }
    }

    setStatus(newStatus: "active" | "banned"): void {
        this.status = newStatus;
    }

    getStatus(): "active" | "banned" {
        return this.status;
    }
}

class adminAcc extends _Account {
    constructor(id: string, userName: string, password: string, isLogin: boolean, role: string) {
        super(id, userName, password, isLogin, role);
    }

    banUser(user: _userAcc): void {
        user.setStatus("banned");
        console.log(`Nguoi dung ${user.userName} Da khoa tai khoan.`);
    }
}

// ==== Test thử ====
const userr1 = new _userAcc("001", "duy", "123", false, "user", "active");
const admin1 = new adminAcc("999", "boss", "admin123", false, "admin");

userr1.login();        
admin1.banUser(userr1);
userr1.login();       
