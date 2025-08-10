class Book_List {
    private id: number;
    private title: string;
    private author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getInfo(): string {
        return `ID: ${this.id}, Tiêu đề: ${this.title}, Tác giả: ${this.author}`;
    }

    updateInfo(newTitle: string, newAuthor: string): void {
        this.title = newTitle;
        this.author = newAuthor;
    }
}

class _Libraryy {
    private books: Book_List[] = [];

    addBook(book: Book_List): void {
        this.books.push(book);
    }

    showBooks(): void {
        if (this.books.length === 0) {
            console.log("Thư viện hiện không có sách.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }

    updateBookById(id: number, newTitle: string, newAuthor: string): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor);
            console.log(`Sách ID ${id} đã được cập nhật.`);
        } else {
            console.log(`Không tìm thấy sách với ID ${id}.`);
        }
    }

    searchBooksByTitle(keyword: string): void {
        const foundBooks = this.books.filter(book =>
            book.getTitle().toLowerCase().includes(keyword.toLowerCase())
        );

        if (foundBooks.length > 0) {
            console.log("Đã tìm thấy sách tìm kiếm: ");
            
            foundBooks.forEach((book, index) => {
                console.log(`${index + 1}. ${book.getInfo()}`);
            });
        } else {
            console.log(`Không tìm thấy sách nào với từ khóa "${keyword}".`);
        }
    }
}

// --- Test ---
const _Book1 = new Book_List(1, "Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
const _Book2 = new Book_List(2, "Lão Hạc", "Nam Cao");
const _Book3 = new Book_List(3, "Tắt Đèn", "Ngô Tất Tố");
const _Book4 = new Book_List(4, "Số Đỏ", "Vũ Trọng Phụng");
const _Book5 = new Book_List(5, "Truyện Kiều", "Nguyễn Du");

const _myLibrary = new _Libraryy();
_myLibrary.addBook(_Book1);
_myLibrary.addBook(_Book2);
_myLibrary.addBook(_Book3);
_myLibrary.addBook(_Book4);

console.log("------Danh sách ban đầu-----------");
_myLibrary.showBooks();

console.log("---------Danh sách sau khi tìm kiếm---------");

_myLibrary.searchBooksByTitle("tuổi");
