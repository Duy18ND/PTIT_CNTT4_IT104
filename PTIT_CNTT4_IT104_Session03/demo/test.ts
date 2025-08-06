//Kieu number
let age: number = 18;

//Kieu string
let fullName: string = "Doan Manh Duy";

//Kieu du lieu boolend
let islogin: boolean = true;

//Kieu du lieu void
function print():void{
    console.log(age);
    console.log(fullName);
    console.log(islogin);
}
print();

//Kieu mang
let arr: number[] = [1,2,3,4];
let student: string[] = ["Duy", "a", "b"];
//Cach 2
let students: Array<string> = ["Duy","Hello"];
let students1: Array<number> = [1,2,3,4,5];

//Kieu du lieu object
let obj:{name:string,address:string,age:number} = {
    name: "Doan hoa",
    address: "ha noi",
    age: 18,
}

//Kieu tuple
let personInfo: [string, number, string] = ["Poodle",3,"ND"];
