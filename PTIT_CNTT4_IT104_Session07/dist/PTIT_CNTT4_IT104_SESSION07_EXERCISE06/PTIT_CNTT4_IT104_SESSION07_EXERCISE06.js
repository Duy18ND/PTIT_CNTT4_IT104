class _Account {
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login() { }
    logout() {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Dang nhap thanh cong!");
        }
    }
}
class _userAcc extends _Account {
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            this.isLogin = true;
            console.log("Dang nhap thanh cong");
        }
        else {
            console.log("Tai khoan da bi khoa");
        }
    }
    setStatus(newStatus) {
        this.status = newStatus;
    }
    getStatus() {
        return this.status;
    }
}
class adminAcc extends _Account {
    constructor(id, userName, password, isLogin, role) {
        super(id, userName, password, isLogin, role);
    }
    banUser(user) {
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
