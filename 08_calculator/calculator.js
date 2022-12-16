const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let summedArray = 0;
	for (let i = 0; i < array.length; i++) {
    summedArray += array[i];
  }
  return summedArray;
};

const multiply = function(a, b) {
  return (a * b);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
    let result = a;
    if (a === 0 || a === 1) 
      return 1; 
    while (a > 1) { 
      a--;
      result *= a;
    }
    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
