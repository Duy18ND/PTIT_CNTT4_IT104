// Tạo lớp Book
class Book {
    id: number;
    title: string;
    author: string;
    year: number;

    constructor(id: number, title: string, author: string, year: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

// Tạo lớp Library generic
class Library<T extends { id: number; title: string; author: string}> {
    books: T[] = [];

    // 1. Thêm sách
    addBook(book: T): void {
        this.books.push(book);
    }

    // 2. Tìm sách theo ID
    getBookByID(valueId: number): T | undefined {
        return this.books.find(item => item.id === valueId);
    }

    // 3. Xóa sách theo ID
    removeBookById(valueId: number): void {
        let findIndex = this.books.findIndex(item => item.id === valueId);
        if (findIndex === -1) {
            console.log("Không tìm thấy sách trong thư viện");
        } else {
            let confirmDelete = confirm(`Bạn muốn xóa sách: ${this.books[findIndex].title}?`);
            if (confirmDelete) {
                this.books.splice(findIndex, 1);
                console.log("Xóa thành công!");
            }
        }
    }

    // 4. Cập nhật toàn bộ thông tin sách
    updateBook(valueId: number, updatedBook: T): void {
        let findIndex = this.books.findIndex(item => item.id === valueId);
        if (findIndex === -1) {
            console.log("Không tìm thấy ID này!");
        } else {
            this.books[findIndex] = updatedBook;
            console.log("Cập nhật thành công!");
        }
    }

    // 5. In danh sách tất cả sách
    listBook(): void {
        if (this.books.length === 0) {
            console.log("Thư viện trống!");
            return;
        }

        this.books.forEach((item, index) => {
            console.log(`Sách ${index + 1}:
                ID: ${item.id}
                Tiêu đề: ${item.title}
            `);
        });
    }

     findBooksByTitleOrAuthor(searchTerm: string): T[] {
        return this.books.filter(item =>
            item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())||
            item.author.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        )

    }
}