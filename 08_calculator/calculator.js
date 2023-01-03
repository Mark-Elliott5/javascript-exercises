const add = function(x, y) {
	return (x+y);
};

const subtract = function(x, y) {
	return (x-y);
};

const sum = function(arrayOfValues) {
  let sum = 0;
	for (let i = 0; i < arrayOfValues.length; i++) {
    sum += arrayOfValues[i];
  } return sum;
};

const multiply = function(inputArray) {
  let value = inputArray[0];
	for (let i = 1; i < inputArray.length; i++) {
    value *= inputArray[i];
  } return value;
}

const power = function(x, y) {
	return (x**y);
};

const factorial = function(x) {
  if ((x == 0) || (x ==1 )) {
    return 1;
  } let factorial = x;
	for (let i = (x-1); i > 0; i--) {
    factorial *= i;
  } return factorial;
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
