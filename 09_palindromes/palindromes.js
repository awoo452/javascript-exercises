const palindromes = function (string) {
    let flippedArray = [];
    let array = [];
    for (let i = string.length - 1; i >= 0; i--) {
        flippedArray.push(string[i]);
    }
    for (let j = 0; j < string.length; j++) {
        array.push(string[j]);
    }
    console.log(flippedArray);
    console.log(array);
    for (let k = 0; k < string.length; k++) {
    if (array[k] === flippedArray[k]) {
            return true;
        } else return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
