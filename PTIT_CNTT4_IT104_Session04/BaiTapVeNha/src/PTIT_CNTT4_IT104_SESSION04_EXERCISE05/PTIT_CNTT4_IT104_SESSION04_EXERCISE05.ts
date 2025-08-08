type Person  = {
    name: string,
    age: number
}

type Employee = {
  employeeId: string;
  department: string;
};

type connect = Person & Employee;

function printList(connect: connect):void {
    console.log(
    `Nhân viên: ${connect.name} (${connect.age} tuổi), Mã nhân viên: ${connect.employeeId} - Phòng: ${connect.department}`
  );
}
    const connectType: connect = {
        name: "Doan manh duy",
        age: 18,
        employeeId: "NV01",
        department: "404"
    }
printList(connectType);

interface PersonInterface { name: string; age: number; }
interface EmployeeInterface { employeeId: string; department: string; }
type connectt  = Person & Employee;
    const connectInterface = {
        name: "Duy",
        age: 12,
        employeeId: "NV213",
        department: "233"
    }
printList(connectInterface);
