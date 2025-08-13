//Generic
//Giup viet ma linh hoat, tai su dung cao

function generic<T>(param: T):T{
    return param;
}

generic("123");
generic(1);
generic(true);

//1, Kieu mang
let number: number[] = [1,2,3,4,5];
let number1: Array<number> = [1,2,3,4,5];
let studentName: Array<string> = ["T", "N", "L"];

//2. Kieu Record
const user_info: Record<string,number | string> = { // :Record<key, value>
    name:  "Duy",
    age: 19,
}

// 3. Kieu Partial (Kieu tuy chon)
interface Contact {
    email: string,
    phone: string,
}
const parttialUser: Partial<Contact> = {
    email: "Hoai@email.com",
    //Co the chon 1 hay nhieu trong Contact
}

// 4. Kieu du lieu Readonly: (chi doc, hien thij khong duoc cap nhap chinh sua)
interface Score {
    math: number,
    physic:number
}
const score1: Readonly<Score> = {
    math: 11,
    physic: 23
}

// score1.math = 11; Se thi bao loi khong thay doi duoc

// 5. Pick (Tuy chon)
interface User{
    id: string,
    name: string,
    email: string,
    address: string
}

let user2: Pick<User, "id" | "name"> = {
    id: "ABC123",
    name: "Duy"
}

// 6. Omit (Loai bo mot so key khoi T)
let user3: Omit<User, "address"> = {
    id: "001",
    name: "abc",
    email: "ea@email.com"
}