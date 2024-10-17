// Задание 3
// Создайте модуль, предоставляющий функциональность работы с 
// математическими операциями, реализуйте в нем 6 функций, подключите в него 
// модуль, предоставляющий константы, необходимые для ваших функций. При 
// экспортировании функций и переменных приведите примеры всех видов 
// использования директивы экспорта.
// Подключите реализованную функциональность в основной модуль и 
// приведите примеры использования. При импортировании функций и 
// переменных приведите примеры всех видов использования директивы
// импорта


const { add, subtract, multiply, divide, areaOfCircle, eulerCalculation } = require('./mathOperations');


console.log("Addition:", add(5, 3)); // 8
console.log("Subtraction:", subtract(10, 4)); // 6
console.log("Multiplication:", multiply(6, 7)); // 42
console.log("Division:", divide(9, 3)); // 3
console.log("Area of Circle:", areaOfCircle(5)); // 78.53975
console.log("Euler Calculation:", eulerCalculation(2)); // 5.43656
