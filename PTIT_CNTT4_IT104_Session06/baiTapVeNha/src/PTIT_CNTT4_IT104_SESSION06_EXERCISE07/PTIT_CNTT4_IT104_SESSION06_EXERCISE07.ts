class Studentt {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    setName(newName: string): void {
        this.name = newName;
    }
}

let allStudents: Studentt[] = [];

class Classroomm {
    private students: Studentt[] = [];

    showStudents(): void {
        if (this.students.length === 0) {
            console.log("Lop chua co hoc sinh.");
        } else {
            this.students.forEach(student => {
                console.log(`ID: ${student.getId()}, Ten: ${student.getName()}`);
            });
        }
    }

    addStudentInClass(id: number): void {
        const index = allStudents.findIndex(student => student.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        } else {
            console.log(`Khong tim thay hoc sinh voi ID ${id} trong danh sach tat ca hoc sinh.`);
        }
    }

    removeStudent(id: number): void {
        const index = this.students.findIndex(student => student.getId() === id);
        if (index !== -1) {
            allStudents.push(this.students[index]);
            this.students.splice(index, 1);
        } else {
            console.log(`Khong tim thay hoc sinh voi ID ${id} trong lop.`);
        }
    }

    editStudent(id: number, newName: string): void {
        const student = this.students.find(student => student.getId() === id);
        if (student) {
            student.setName(newName);
        } else {
            console.log(`Khong tim thay hoc sinh voi ID ${id} de sua.`);
        }
    }
}

// Danh sach tat ca hoc sinh ban dau
allStudents.push(
    new Studentt(1, "Duy"),
    new Studentt(2, "Hoa"),
    new Studentt(3, "Chi"),
);

// Tao lop A va lop B
const classAa = new Classroomm();
const classBb= new Classroomm();

// Them hoc sinh vao lop A
classAa.addStudentInClass(1);
classAa.addStudentInClass(2);
classAa.addStudentInClass(3);

console.log("Lop A ban dau:");
classAa.showStudents();

classAa.removeStudent(2);
console.log("Lop A sau khi xoa hoc sinh ID 2:");
classAa.showStudents();

console.log("Danh sach tat ca hoc sinh sau khi tra ve:");
console.log(allStudents.map(s => `ID: ${s.getId()}, Ten: ${s.getName()}`));

classAa.editStudent(2, "Chien");
console.log("Lop A sau khi sua ten hoc sinh ID 3:");
classAa.showStudents();
