"use strict";
let num1 = "2";
let num2 = 2;
if (num1 == num2) //khi dùng == javaScript sẽ ép kiểu ngầm chuyển "2" -> 2 nên điều kiện này là true
    if (num1 === num2)
        ; //khi dùng === javaScript không ép kiểu nên "2" là string / 2 là number khác kiểu nên là false
