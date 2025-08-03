let a = prompt("Moi ban nhap a");

const hello = (a) => {
    if (isNaN(a)) {
        console.log(`${a} is not a number`);
    } else if (parseInt(a) % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
};
hello(a);