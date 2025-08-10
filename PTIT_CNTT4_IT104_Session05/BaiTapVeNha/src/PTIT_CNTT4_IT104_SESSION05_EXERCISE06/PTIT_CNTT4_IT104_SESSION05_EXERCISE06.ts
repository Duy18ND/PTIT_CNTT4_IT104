class Book {
  private title: string;
  private author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  public getInfo(): string {
    return `${this.title} - ${this.author}`;
  }
}

class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public viewBooks(): void {
    console.log("Danh sách sách trong thư viện:");
    this.books.forEach((book, index) => {
      console.log(`${index + 1}. ${book.getInfo()}`);
    });
  }
}

// Khởi tạo 5 quyển sách
const book1 = new Book("Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
const book2 = new Book("Lão Hạc", "Nam Cao");
const book3 = new Book("Tắt Đèn", "Ngô Tất Tố");
const book4 = new Book("Số Đỏ", "Vũ Trọng Phụng");
const book5 = new Book("Truyện Kiều", "Nguyễn Du");

// Tạo thư viện và thêm sách
const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);

// Xem danh sách sách
myLibrary.viewBooks();