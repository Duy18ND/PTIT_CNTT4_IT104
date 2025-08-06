function find(character: string) {
    const words: string[] = character.split(" ");
    let checkWords: string = "";

    for (let i: number = 0; i < words.length; i++) {
        const check = words[i];
        const totalChar: string[] = [];
        let found: boolean = true;

        for (let j: number = 0; j < check.length; j++) {
            if (totalChar.includes(check[j])) {
                found = false;
                break;
            } else {
                totalChar.push(check[j]);
            }
        }

        if (found && check.length > checkWords.length) {
            checkWords = check;
        }
    }
    return checkWords;
}

const sentence: string = "hello world apple banana orange pumpkin cucumber";
console.log(find(sentence));
