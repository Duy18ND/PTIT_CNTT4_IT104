function calculate(operater) {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const total = document.getElementById("total");
    const val1 = input1.value.trim();
    const val2 = input2.value.trim();
    const num1 = Number(val1);
    const num2 = Number(val2);
    if ((input1 && isNaN(num1)) || (input2 && isNaN(num2))) {
        total.innerHTML = "Lỗi: Dữ liệu không hợp lệ!";
        return;
    }
    let result = 0;
    switch (operater) {
        case '+':
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0)
                throw "Không thể chia cho 0";
            result = num1 / num2;
            break;
        case "^":
            result = Math.pow(num1, num2);
            break;
        case "√":
            if (num2 === 0)
                throw "Căn bậc 0 không hợp lệ";
            result = Math.pow(num1, 1 / num2);
            break;
        case "!":
            if (!Number.isInteger(num1) || num1 < 0)
                throw "Chỉ tính giai thừa cho số nguyên không âm";
            result = 1;
            for (let i = 2; i <= num1; i++)
                result *= i;
            break;
    }
    total.innerHTML = `Kết quả: ${result}`;
}
//# sourceMappingURL=bai9.js.map