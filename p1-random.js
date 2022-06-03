/*
    Prompt: 
        Return a random number between min (inclusive) and max (exclusive)
    Steps:
        1) Define alphabet
        2) Get length of word
        3) Get letter
        4) Get random letters 
        5) Convert array to string
*/

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let wordLength = Math.floor(Math.random() * (26 - 5) + 5);

function getRandomLetter() {
    let arrayRandom = [Math.floor(Math.random() * alphabet.length)];
    return alphabet[arrayRandom];
}
function getRandomWord() {
    let emptyArray = [];
    for (let index = 0; index <= wordLength; index++) {
        emptyArray.push(getRandomLetter());
    }
    return emptyArray.join("");
}

console.log(getRandomWord());