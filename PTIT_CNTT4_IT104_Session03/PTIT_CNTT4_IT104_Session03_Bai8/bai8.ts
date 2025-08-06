function total(a: number|string, b: number|string){
        if(typeof a === "string"){
            a = Number(a);
            if(isNaN(a)){
                    return "Gia tri a khong hop le!";
            }
        }

        if(typeof b === "string"){
            b = Number(b);
            if(isNaN(b)){
                    return "Gia tri b khong hop le!";
            }
        }
        let result = a + b;
        console.log(result);

        result = a - b;
        console.log(result);

        result = a * b;
        console.log(result);

        result = a / b;
        console.log(result); 
}

total(10,3);