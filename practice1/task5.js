// Задание 5
// Создайте функцию, которая принимает два аргумента, выполняет над ними 
// математическую операцию и возвращает ее результат. Используйте три
// различных синтаксиса описания функции

function sum(a, b) {
    return a + b;
}
console.log(sum(5, 3));

const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(5, 3));

const divide = (a, b) => a / b;
console.log(divide(10, 2));
