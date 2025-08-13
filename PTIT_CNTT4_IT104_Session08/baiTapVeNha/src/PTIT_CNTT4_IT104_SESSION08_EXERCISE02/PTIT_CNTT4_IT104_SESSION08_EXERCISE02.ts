function printMessager<T extends boolean>(value: T){
    if(value){
        console.log("Xin chao!");
    }else{
        console.log("Tam biet!");
    }
}

printMessager(true);
printMessager(false);