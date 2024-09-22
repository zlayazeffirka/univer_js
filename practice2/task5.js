// Задание 5
// Создайте коллекцию ключ-значение с помощью Map, добавьте в нее три
// элемента, выведите в консоль значение последнего добавленного элемента. 
// Удалите любой элемент, проверьте его отсутствие в коллекции

let userMap = new Map();

userMap.set("key1", "Иван");
userMap.set("key2", "Мария");
userMap.set("key3", "Алексей");

console.log("Последний добавленный элемент:", userMap.get("key3"));

userMap.delete("key2");

console.log("Мария отсутствует в коллекции?", !userMap.has("key2"));
