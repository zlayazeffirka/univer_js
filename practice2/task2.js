// Задание 2
// Создайте произвольную строку, выведите в консоль ее длину, первый и 
// последний символы. Проверьте, начинается ли строка с foo, заканчивается ли 
// на bar, содержит ли она некоторую подстроку.

let str = "foobar123bar";

console.log("Длина строки:", str.length);

console.log("Первый символ:", str.charAt(0));
console.log("Последний символ:", str.charAt(str.length - 1));

console.log("Строка начинается с 'foo'?", str.startsWith("foo"));

console.log("Строка заканчивается на 'bar'?", str.endsWith("bar"));

console.log("Строка содержит '123'?", str.includes("123"));
