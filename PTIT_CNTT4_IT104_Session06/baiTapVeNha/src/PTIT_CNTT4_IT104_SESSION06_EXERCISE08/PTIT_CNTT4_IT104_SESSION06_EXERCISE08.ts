class Book {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public stock: number,
        public status: string
    ) {}
}

class Member {
    constructor(
        public id: number,
        public name: string,
        public contact: string,
        public lendedBooks: LendedBook[] = [],
        public status: string
    ) {}
}

class LendedBook {
    constructor(
        public memberId: number,
        public bookId: number,
        public dueDate: string
    ) {}
}

class Library {
    public books: Book[] = [];
    public members: Member[] = [];

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Da them sach: ${book.title}`);
    }

    showBooks(): void {
        console.log("Danh sach sach trong thu vien:");
        if (this.books.length === 0) {
            console.log("Khong co sach nao trong thu vien.");
        } else {
            this.books.forEach(book => {
                console.log(`ID: ${book.id} - ${book.title} - ${book.author} - Ton kho: ${book.stock} - Trang thai: ${book.status}`);
            });
        }
    }
}

const myLibrary = new Library();
const book1 = new Book(1, "Lap Trinh JS", "Nguyen Van A", 3, "Co san");
const book2 = new Book(2, "Hoc TypeScript", "Tran Thi B", 5, "Co san");
const book3 = new Book(3, "Cau Truc Du Lieu", "Le Van C", 0, "Het hang");
const book4 = new Book(4, "Frontend", "Trinh van D", 4, "Co san");
const book5 = new Book(5, "FullStack", "Trinh van E", 0, "Het hang");

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);

myLibrary.showBooks();
