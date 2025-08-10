class Student {
    id: number;
    age: number;
    email: string;

    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }

    getInfo(): string {
        return `ID: ${this.id}, Age: ${this.age}, Email: ${this.email}`;
    }
}

// Tạo 3 đối tượng
const user1 = new Student(1, 20, "duy18nd@gmail.com");
const user2 = new Student(2, 18, "DMD@email.com");
const user3 = new Student(3, 12, "TNL@gmail.com");

// Lưu vào mảng
const StudentList: Student[] = [];
StudentList.push(user1, user2, user3);

for(let i of StudentList){
    console.log(i.getInfo());
    
}