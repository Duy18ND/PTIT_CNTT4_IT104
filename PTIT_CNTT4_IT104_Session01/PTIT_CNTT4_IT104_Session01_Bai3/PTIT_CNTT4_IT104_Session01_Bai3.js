const Student = [
    {
        id: 1, 
        name: "TNL"
    },
    {
        id: 2,
        name: "Tran Ngoc Linh"
    }
];

Student.forEach(student =>{
    console.log(`
        Xin chào ${student.id}! Mã số: ${student.name}
        `);
});