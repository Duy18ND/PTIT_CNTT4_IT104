class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
let studentList = [];
class Classroom {
    constructor() {
        this.students = [];
    }
    showStudents() {
        if (this.students.length === 0) {
            console.log("Danh sach sinh vien trong!");
        }
        else {
            this.students.forEach(student => {
                console.log(`ID: ${student.getId()}, Tên: ${student.getName()}`);
            });
        }
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        return this.students.filter(student => student.getId() === id);
    }
    addStudentInClass(id) {
        const index = studentList.findIndex(student => student.getId() === id);
        if (index !== -1) {
            this.students.push(studentList[index]);
            studentList.splice(index, 1);
        }
        else {
            console.log(`Khong tim thay sinh vien ID: ${id}`);
        }
    }
}
studentList.push(new Student(1, "Duy"), new Student(2, "Hai"), new Student(3, "Tu"), new Student(4, "Hoai"), new Student(5, "Hoa"), new Student(6, "Chi"));
const classA = new Classroom();
const classB = new Classroom();
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);
classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);
console.log("Danh sach hoc sinh lop A: ");
classA.showStudents();
console.log("Danh sach hoc sinh lop B:");
classB.showStudents();
