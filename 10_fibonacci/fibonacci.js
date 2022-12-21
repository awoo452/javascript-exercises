const fibonacci = function(nth) {
    if (nth < 0) {
        return 'OOPS';
    } else {
    let i;
    let fib = [0, 1];
    for (i = 2; i <= nth; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib[nth];
    }
};

// Do not edit below this line
module.exports = fibonacci;
