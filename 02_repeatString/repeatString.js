const repeatString = function(string, num) {
    let finalString  = '';
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            if (i < num) {
                finalString += string.toString();
            }
        }
        return finalString;
    } else return 'ERROR';
}

// Do not edit below this line
module.exports = repeatString;
