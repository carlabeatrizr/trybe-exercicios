function checkEnding(stringWord, stringEnding) {
    let wordIndexDifference = stringWord.length - stringEnding.length;
    let indexStringWord = stringWord.indexOf(
        stringEnding, wordIndexDifference
    );
    if (indexStringWord !== -1) {
        return true;
    } else {
        return false;
    }
}
let stringWord = "trybe";
let stringEnding = "be";
console.log(checkEnding(stringWord, stringEnding));