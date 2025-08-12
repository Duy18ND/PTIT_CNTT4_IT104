class Bookk {
    constructor(
        public bookIdk: number,
        public bookTitlek: string,
        public bookAuthork: string,
        public bookStockk: number,
        public bookStatusk: string
    ) {}
}

class Memberk {
    constructor(
        public memberIdk: number,
        public memberNamek: string,
        public memberContactk: string,
        public memberLendedBooksk: LendedBookk[] = [],
        public memberStatusk: string
    ) {}
}

class LendedBookk {
    constructor(
        public lenderMemberIdk: number,
        public lenderBookIdk: number,
        public lenderDueDatek: string
    ) {}
}

class LibraryManagerk {
    public bookListk: Bookk[] = [];
    public memberListk: Memberk[] = [];

    addBookk(bookk: Bookk): void {
        this.bookListk.push(bookk);
        console.log(`Da them sach: ${bookk.bookTitlek}`);
    }

    showBooksk(): void {
        console.log("Danh sach sach trong thu vien:");
        if (this.bookListk.length === 0) {
            console.log("Khong co sach nao trong thu vien.");
        } else {
            this.bookListk.forEach(bk => {
                console.log(`ID: ${bk.bookIdk} | ${bk.bookTitlek} - ${bk.bookAuthork} | Ton kho: ${bk.bookStockk} | Trang thai: ${bk.bookStatusk}`);
            });
        }
    }

    registerMemberk(idk: number, namek: string, contactk: string): void {
        const newMemberk = new Memberk(idk, namek, contactk, [], "Hoat dong");
        this.memberListk.push(newMemberk);
        console.log(`Da dang ky thanh vien: ${namek}`);
    }

    blockMemberk(idk: number): void {
        const memberk = this.memberListk.find(mk => mk.memberIdk === idk);
        if (memberk) {
            memberk.memberStatusk = "Bi khoa";
            console.log(`Da khoa thanh vien: ${memberk.memberNamek}`);
        } else {
            console.log(`Khong tim thay thanh vien co ID: ${idk}`);
        }
    }

    showMembersk(): void {
        console.log("Danh sach thanh vien trong thu vien:");
        if (this.memberListk.length === 0) {
            console.log("Khong co thanh vien nao.");
        } else {
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
