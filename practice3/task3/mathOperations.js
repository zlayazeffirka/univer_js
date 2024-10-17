const { PI, EULER } = require('./constants');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Деление на ноль");
  return a / b;
}

function areaOfCircle(radius) {
  return PI * radius * radius;
}

const eulerCalculation = (x) => EULER * x;


module.exports = { add, subtract, multiply, divide, areaOfCircle, eulerCalculation };
