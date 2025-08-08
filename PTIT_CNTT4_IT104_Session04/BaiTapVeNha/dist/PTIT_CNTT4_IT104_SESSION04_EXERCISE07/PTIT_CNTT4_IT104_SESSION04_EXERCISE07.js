function processInput(input) {
    if (typeof input === "string") {
        if (!isNaN(Number(input)) && Number.isInteger(Number(input))) {
            //Neu la day so nguyen thi ^2
            const num = Number(input);
            console.log(num * num);
        }
        else {
            //Neu la chuoi thi in ky tu
            const letterCount = (input.match(/[a-zA-Z]/g) || []).length;
            console.log(`${letterCount} ký tự chữ cái`);
        }
    }
    else if (typeof input === "number") {
        if (input < 2 || !Number.isInteger(input)) {
            console.log("Không phải số nguyên tố");
            return;
        }
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(input); i++) {
            if (input % i === 0) {
                isPrime = false;
                break;
            }
        }
        console.log(isPrime ? "Là số nguyên tố" : "Không phải số nguyên tố");
    }
    else if (typeof input === "boolean") {
        console.log(input ? "Giá trị là true - tiến hành xử lý" : "Giá trị là false - dừng xử lý");
    }
}
processInput("123");
processInput("abc123");
processInput(2);
processInput(4);
processInput(true);
processInput(false);
