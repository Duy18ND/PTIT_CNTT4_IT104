//Generic
//Giup viet ma linh hoat, tai su dung cao
function generic(param) {
    return param;
}
generic("123");
generic(1);
generic(true);
//1, Kieu mang
let number = [1, 2, 3, 4, 5];
let number1 = [1, 2, 3, 4, 5];
let studentName = ["T", "N", "L"];
//2. Kieu Record
const user_info = {
    name: "Duy",
    age: 19,
};
const parttialUser = {
    email: "Hoai@email.com",
    //Co the chon 1 hay nhieu trong Contact
};
const score1 = {
    math: 11,
    physic: 23
};
let user2 = {
    id: "ABC123",
    name: "Duy"
};
// 6. Omit (Loai bo mot so key khoi T)
let user3 = {
    id: "001",
    name: "abc",
    email: "ea@email.com"
};
