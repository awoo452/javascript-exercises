const reverseString = function(string) {
    let reversedString = [];
    let finalString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString.push(string[i]);
    }
    for (let i = 0; i < reversedString.length; i++) {
        finalString += reversedString[i];
    }
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
