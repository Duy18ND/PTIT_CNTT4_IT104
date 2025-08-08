interface Student {
    name: string,
    age: number,
    email: string
};

function printStudent(student: Student):void {
    console.log(`
        Xin chào tôi tên là ${student.name}, tôi năm nay ${student.age}.
        Đây là email của tôi ${student.email}`);
}
const user1:Student = {
    name: "Duy",
    age: 20,
    email: "Duy18nd@gmail.com"
};

printStudent(user1);

type StudentType = {
    name: string,
    age: number,
    email: string
};

const user2:StudentType = {
    name: "Poodle",
    age: 22,
    email: "18nd@gmail.com"
};
printStudent(user2);