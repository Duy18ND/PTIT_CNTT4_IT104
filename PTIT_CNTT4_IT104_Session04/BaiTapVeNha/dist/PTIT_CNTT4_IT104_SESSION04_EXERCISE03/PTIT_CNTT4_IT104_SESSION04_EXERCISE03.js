;
function printStudent(student) {
    console.log(`
        Xin chào tôi tên là ${student.name}, tôi năm nay ${student.age}.
        Đây là email của tôi ${student.email}`);
}
const user1 = {
    name: "Duy",
    age: 20,
    email: "Duy18nd@gmail.com"
};
printStudent(user1);
const user2 = {
    name: "Poodle",
    age: 22,
    email: "18nd@gmail.com"
};
printStudent(user2);
