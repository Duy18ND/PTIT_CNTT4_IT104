function checkElement(arr, find){
    let check = -1;
    arr.map(a => {
        if(a === find){
            console.log("True");
            check = 1;
        }
    });
    if(check === -1){
        console.log("Flase");
    }
}
checkElement([1,2,3,4,5], 2);