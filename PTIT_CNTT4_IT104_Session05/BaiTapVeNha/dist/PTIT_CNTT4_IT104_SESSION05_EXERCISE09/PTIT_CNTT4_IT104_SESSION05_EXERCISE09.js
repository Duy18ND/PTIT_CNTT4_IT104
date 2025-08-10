class List_BOOK {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    // Getter
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getYear() {
        return this.year;
    }
    getInfo() {
        return `ID: ${this.id}, Tiêu đề: ${this.title}, Tác giả: ${this.author}, Năm XB: ${this.year}`;
    }
    // Setter
    setTitle(newTitle) {
        this.title = newTitle;
    }
    setAuthor(newAuthor) {
        this.author = newAuthor;
    }
    setYear(newYear) {
        this.year = newYear;
    }
}
class LLibrary {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        if (this.books.length === 0) {
            console.log("Thư viện hiện không có sách.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }
    deleteBookById(id) {
        const initialLength = this.books.length;
        this.books = this.books.filter(book => book.getId() !== id);
        if (this.books.length < initialLength) {
            console.log(`Sách ID ${id} đã được xóa khỏi thư viện.`);
        }
        else {
            console.log(`Không tìm thấy sách với ID ${id}.`);
        }
    }
    updateBookById(id, newTitle, newAuthor, newYear) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            book.setYear(newYear);
            console.log(`Sách ID ${id} đã được cập nhật.`);
        }
        else {
            console.log(`Không tìm thấy sách với ID ${id}.`);
        }
    }
}
// --- Test ---
const book_1 = new List_BOOK(1, "Dế Mèn Phiêu Lưu Ký", "Tô Hoài", 1941);
const book_2 = new List_BOOK(2, "Lão Hạc", "Nam Cao", 1943);
const book_3 = new List_BOOK(3, "Tắt Đèn", "Ngô Tất Tố", 1939);
const book_4 = new List_BOOK(4, "Số Đỏ", "Vũ Trọng Phụng", 1936);
const book_5 = new List_BOOK(5, "Truyện Kiều", "Nguyễn Du", 1820);
const my_Library = new LLibrary();
my_Library.addBook(book_1);
my_Library.addBook(book_2);
my_Library.addBook(book_3);
my_Library.addBook(book_4);
my_Library.addBook(book_5);
console.log("\nDanh sách ban đầu:");
my_Library.showBooks();
//cập nhật 
console.log("\nCập nhật sách ID 2:");
my_Library.updateBookById(2, "Tuổi Trẻ Đáng Giá Bao Nhiêu (Bản Mới)", "Rosie Nguyễn", 2020);
my_Library.showBooks();
//Xóa
console.log("\nXóa sách ID 1:");
my_Library.deleteBookById(1);
my_Library.showBooks();
