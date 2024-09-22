// Задание 3
// Напишите программу, которая находит среди трех чисел наибольшее, 
// используя логические условия

let num1 = 10;
let num2 = 15;
let num3 = 8;

let max;

if (num1 >= num2 && num1 >= num3) {
    max = num1;
} else if (num2 >= num1 && num2 >= num3) {
    max = num2;
} else {
    max = num3;
}

console.log(`Наибольшее число: ${max}`);
