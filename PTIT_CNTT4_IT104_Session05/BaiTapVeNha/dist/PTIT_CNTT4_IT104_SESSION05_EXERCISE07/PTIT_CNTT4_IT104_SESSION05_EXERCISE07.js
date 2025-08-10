class BookList {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    updateInfo(title, author) {
        this.title = title;
        this.author = author;
    }
    getInfo() {
        return `ID: ${this.id} | ${this.title} - ${this.author}`;
    }
}
class _Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    viewBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }
    updateBookById(id, newTitle, newAuthor) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor);
            console.log(`Đã cập nhật sách có ID ${id}`);
        }
        else {
            console.log(`Không tìm thấy sách có ID ${id}`);
        }
    }
}
// Khởi tạo sách
const _book1 = new BookList(1, "Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
const _book2 = new BookList(2, "Lão Hạc", "Nam Cao");
const _book3 = new BookList(3, "Tắt Đèn", "Ngô Tất Tố");
const _book4 = new BookList(4, "Số Đỏ", "Vũ Trọng Phụng");
const _book5 = new BookList(5, "Truyện Kiều", "Nguyễn Du");
// Tạo thư viện và thêm sách
const newLirary = new _Library();
newLirary.addBook(_book1);
newLirary.addBook(_book2);
newLirary.addBook(_book3);
newLirary.addBook(_book4);
newLirary.addBook(_book5);
// Xem danh sách ban đầu
newLirary.viewBooks();
// Sửa thông tin sách ID = 3
newLirary.updateBookById(3, "Tắt Đèn (Bản Mới)", "Ngô Tất Tố");
// Xem danh sách sau khi sửa
console.log("\n-------Sau khi cập nhật-------");
newLirary.viewBooks();
