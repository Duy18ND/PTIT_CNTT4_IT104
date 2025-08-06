let character: string = "banana";

let fount = character.split("").reduce((result, char) => {
   return result.includes(char) ? result : result + char;
}, "");

console.log("Output: ", fount);
