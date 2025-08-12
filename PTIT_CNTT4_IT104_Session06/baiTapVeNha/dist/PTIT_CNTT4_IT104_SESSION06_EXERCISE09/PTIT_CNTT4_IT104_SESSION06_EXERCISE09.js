class Bookk {
    constructor(bookIdk, bookTitlek, bookAuthork, bookStockk, bookStatusk) {
        this.bookIdk = bookIdk;
        this.bookTitlek = bookTitlek;
        this.bookAuthork = bookAuthork;
        this.bookStockk = bookStockk;
        this.bookStatusk = bookStatusk;
    }
}
class Memberk {
    constructor(memberIdk, memberNamek, memberContactk, memberLendedBooksk = [], memberStatusk) {
        this.memberIdk = memberIdk;
        this.memberNamek = memberNamek;
        this.memberContactk = memberContactk;
        this.memberLendedBooksk = memberLendedBooksk;
        this.memberStatusk = memberStatusk;
    }
}
class LendedBookk {
    constructor(lenderMemberIdk, lenderBookIdk, lenderDueDatek) {
        this.lenderMemberIdk = lenderMemberIdk;
        this.lenderBookIdk = lenderBookIdk;
        this.lenderDueDatek = lenderDueDatek;
    }
}
class LibraryManagerk {
    constructor() {
        this.bookListk = [];
        this.memberListk = [];
    }
    addBookk(bookk) {
        this.bookListk.push(bookk);
        console.log(`Da them sach: ${bookk.bookTitlek}`);
    }
    showBooksk() {
        console.log("Danh sach sach trong thu vien:");
        if (this.bookListk.length === 0) {
            console.log("Khong co sach nao trong thu vien.");
        }
        else {
            this.bookListk.forEach(bk => {
                console.log(`ID: ${bk.bookIdk} | ${bk.bookTitlek} - ${bk.bookAuthork} | Ton kho: ${bk.bookStockk} | Trang thai: ${bk.bookStatusk}`);
            });
        }
    }
    registerMemberk(idk, namek, contactk) {
        const newMemberk = new Memberk(idk, namek, contactk, [], "Hoat dong");
        this.memberListk.push(newMemberk);
        console.log(`Da dang ky thanh vien: ${namek}`);
    }
    blockMemberk(idk) {
        const memberk = this.memberListk.find(mk => mk.memberIdk === idk);
        if (memberk) {
            memberk.memberStatusk = "Bi khoa";
            console.log(`Da khoa thanh vien: ${memberk.memberNamek}`);
        }
        else {
            console.log(`Khong tim thay thanh vien co ID: ${idk}`);
        }
    }
    showMembersk() {
        console.log("Danh sach thanh vien trong thu vien:");
        if (this.memberListk.length === 0) {
            console.log("Khong co thanh vien nao.");
        }
        else {
            this.memberListk.forEach(mk => {
                console.log(`ID: ${mk.memberIdk} | Ten: ${mk.memberNamek} | Lien he: ${mk.memberContactk} | Trang thai: ${mk.memberStatusk}`);
            });
        }
    }
}
// Demo
const libraryManagerk = new LibraryManagerk();
libraryManagerk.registerMemberk(1, "Nguyen Van A", "a@example.com");
libraryManagerk.registerMemberk(2, "Tran Thi B", "b@example.com");
libraryManagerk.showMembersk();
libraryManagerk.blockMemberk(2);
libraryManagerk.showMembersk();
