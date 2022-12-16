const sumAll = function(num1, num2) {
    let sumOfAll = 0;
    let numberStorage = 0;
    if (typeof num1 != 'number') {
        return 'ERROR';
    }
    if (typeof num2 != 'number') {
        return 'ERROR';
    }
    if (num1 < 0) {
        return 'ERROR';
    }
    if (num2 < 0) {
        return 'ERROR';
    }
    if (num1 > num2) {
        numberStorage = num2;
        num2 = num1;
        num1 = numberStorage;
    }
    for (let i = num1; i <= num2; i++) {
        sumOfAll += i;
    }
    return sumOfAll;
};

// Do not edit below this line
module.exports = sumAll;
