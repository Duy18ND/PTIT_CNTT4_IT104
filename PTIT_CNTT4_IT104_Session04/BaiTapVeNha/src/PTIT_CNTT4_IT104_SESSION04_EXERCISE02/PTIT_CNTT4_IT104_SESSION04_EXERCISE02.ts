const arr: number[] = [1,2,3,4,5,6,7,8,9,10];

function avg(arr: number[]) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {       
            sum += arr[i];            
            count++;                 
        }
    }
    if(count === 0){
        return `Dữ liệu không hợp lệ!`;
    }else{
        const result = (sum / count).toFixed(2);
        console.log("Trung bình cộng:", result);
    }
}

avg(arr);
