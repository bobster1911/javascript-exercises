const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  let sum = 0;
	for (i = 0; i < length.array; i++) {
    sum += array[i];
  }
  return array;
};

const multiply = function(x, y) {
  return x * y;
};

const power = function(x, power) {
	for (i = 0; i < power; i++) {
    x *= i;
  }
  return x;
};

const factorial = function(x) {
  let result = factorial;
	for (i = factorial-1; i > 0; i--) {
    result *= i;
  }
  return result;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
