function find(character) {
    const words = character.split(" ");
    let checkWords = "";
    for (let i = 0; i < words.length; i++) {
        const check = words[i];
        const totalChar = [];
        let found = true;
        for (let j = 0; j < check.length; j++) {
            if (totalChar.includes(check[j])) {
                found = false;
                break;
            }
            else {
                totalChar.push(check[j]);
            }
        }
        if (found && check.length > checkWords.length) {
            checkWords = check;
        }
    }
    return checkWords;
}
const sentence = "hello world apple banana orange pumpkin cucumber";
console.log(find(sentence));
//# sourceMappingURL=bai10.js.map