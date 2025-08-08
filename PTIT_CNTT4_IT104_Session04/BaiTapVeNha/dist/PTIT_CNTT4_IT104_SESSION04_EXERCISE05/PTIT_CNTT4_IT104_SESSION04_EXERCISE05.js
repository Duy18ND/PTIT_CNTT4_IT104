function printList(connect) {
    console.log(`Nhân viên: ${connect.name} (${connect.age} tuổi), Mã nhân viên: ${connect.employeeId} - Phòng: ${connect.department}`);
}
const connectType = {
    name: "Doan manh duy",
    age: 18,
    employeeId: "NV01",
    department: "404"
};
printList(connectType);
const connectInterface = {
    name: "Duy",
    age: 12,
    employeeId: "NV213",
    department: "233"
};
printList(connectInterface);
