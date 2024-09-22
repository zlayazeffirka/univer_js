// Задание 3
// Создайте массив, содержащий пять произвольных элементов, выведите в 
// консоль его первый и последний элементы. Обновите значение второго 
// элемента массива, создайте второй массив, который является копией первого, 
// выведите оба массива в консоль. Создайте функцию, которая объединяет два 
// массива в один. Создайте массив пользователей (у каждого пользователя
// должно быть имя) и напишите функцию, которая принимает данный массив и
// возвращает массив имен. Создайте функцию нахождения среднего 
// арифметического для массива чисел.

let array1 = [10, 20, 30, 40, 50];


console.log("Первый элемент:", array1[0]);
console.log("Последний элемент:", array1[array1.length - 1]);


array1[1] = 25;
console.log("Обновленный массив:", array1);

let array2 = [...array1];
console.log("Копия первого массива:", array2);

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

let mergedArray = mergeArrays(array1, array2);
console.log("Объединенный массив:", mergedArray);

let users = [{ name: "Иван" }, { name: "Мария" }, { name: "Алексей" }];

function getUserNames(usersArray) {
    return usersArray.map(user => user.name);
}

console.log("Массив имен:", getUserNames(users));

function getAverage(numbers) {
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

let numbersArray = [10, 20, 30, 40, 50];
console.log("Среднее арифметическое:", getAverage(numbersArray));
