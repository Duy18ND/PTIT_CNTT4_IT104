function handleUnionType(value) {
    if (typeof value === "number") {
        if (value % 2 === 0) {
            console.log(`Đây là số chẵn ${value}`);
        }
        else {
            console.log(`Đây là số lẻ ${value}`);
        }
        return;
    }
    if (typeof value === "string") {
        const lengthValue = value.length;
        console.log(`${lengthValue} Ký tự`);
    }
}
handleUnionType(2);
handleUnionType(1);
handleUnionType("Doan");
