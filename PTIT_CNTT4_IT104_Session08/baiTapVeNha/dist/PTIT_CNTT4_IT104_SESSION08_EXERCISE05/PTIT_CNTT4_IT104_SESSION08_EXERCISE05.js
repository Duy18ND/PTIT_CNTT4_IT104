function firstEven(array) {
    for (const item of array) {
        if (typeof item === "number" && item % 2 === 0) {
            return item;
        }
    }
    return undefined;
}
console.log(firstEven([1, 3, 4, 7, 8]));
console.log(firstEven([1, 3, 5]));
console.log(firstEven(["a", "b", "c"]));
