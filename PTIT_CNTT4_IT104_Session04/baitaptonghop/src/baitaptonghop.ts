//Thong tin diem 1 mon hoc
type Subject = {
    subjectName: string,
    score: number | string,
}

//Thong tin cua 1 sinh vien
type Student = {
    id: number,
    name: string,
    age: number,
    subject: Subject[]
}

//Mang chua danh sach sinh vien
let student: Student[] = [];

//Tao ham them thong tin sinh vien
function addStudent(id:number, name:string, age:number, subject:Subject[]){
    const newStudent = {
        id: id,
        name: name,
        age: age,
        subject: subject
    }
    student.push(newStudent);
}

//Tao ham hien thi thong tin sinh vien
function displayStudent(): void {
    console.log("---------------------In thong tin sinh vien----------------------");
    
    student.forEach(sv => {
        console.log(`ID: ${sv.id}`);
        console.log(`Name: ${sv.name}`);
        console.log(`Age: ${sv.age}`);
        console.log("Subjects:");
        sv.subject.forEach(sub => {
            console.log(`- ${sub.subjectName}: ${sub.score}`);
        });
        console.log("---------------------------");
    });
}
addStudent(1, "TNL", 20, [{subjectName: "C++", score: 8}, {subjectName: "C++", score: 10,} ]);
addStudent(2, "POODLE", 3, [{subjectName: "JAVA", score: 2}, {subjectName: "C#", score: 4,} ]);
displayStudent();

//Ham cap nhap sinh vien
function updateStudent(valueID: number): void {
    // Kiểm tra id có tồn tại không
    for (let i = 0; i < student.length; i++) {
        if (student[i].id === valueID) {
            console.log("ID:", student[i].id);

            const name = prompt("Mời bạn nhập lại tên: ");
            if (name !== null && name.trim() !== "") {
                student[i].name = name;
            }

            const ageInput = prompt("Mời bạn nhập lại tuổi: ");
            const age = Number(ageInput);
            if (!isNaN(age)) {
                student[i].age = age;
            }
            student[i].subject.forEach((sub, index) => {
                const scoreInput = prompt(`Nhập lại điểm cho môn ${sub.subjectName} (hiện tại: ${sub.score}):`);
                const score = Number(scoreInput);
                if (!isNaN(score)) {
                    student[i].subject[index].score = score;
                }
            });

            console.log("Cập nhật thành công!");
            return;
        }
    }

    console.log("Không tìm thấy sinh viên có ID:", valueID);
}
//Ham xoa sinh vien
function deleteStudent(valueID: number){
    const findID = student.findIndex(st => st.id == valueID);
        const check = confirm(`Ban co chac xoa id ${valueID}`);
        if(check){
            student.splice(findID, 1);
            console.log("Xoa thanh cong!");
        }
}

updateStudent(2);
displayStudent();

deleteStudent(2);
displayStudent();
