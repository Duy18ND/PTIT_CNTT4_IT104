let firstName: string = "Trần Ngọc";
let lastName: string = "Linh";
function toUpperCase(str:string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
firstName = toUpperCase(firstName);
lastName = toUpperCase(lastName);

let fullName: string = firstName + " " + lastName;
console.log(fullName);

