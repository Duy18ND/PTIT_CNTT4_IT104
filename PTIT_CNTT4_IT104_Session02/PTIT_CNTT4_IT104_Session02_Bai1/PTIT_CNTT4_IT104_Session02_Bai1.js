const sum = (arr) => {
    let sum = 0;
    for (const i of arr) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    console.log(sum);
};
sum([1, 2, 4, 5, 6]);
