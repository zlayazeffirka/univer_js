// Задание 1
// Создайте функцию, которая принимает несколько аргументов, выполняет над 
// ними математическую операцию и возвращает ее результат. Реализуйте в ней 
// обработку возможных ошибок с помощью конструкции try…catch, при 
// получении ошибки выведите в консоль информацию о ней, приведите пример 
// использования. Создайте собственный класс ошибки, приведите пример 
// использования.


class MathError extends Error {
    constructor(message) {
      super(message);
      this.name = "MathError";
    }
  }
  
  function calculate(operation, ...args) {
    try {
      if (args.length === 0) {
        throw new MathError("Нет аргументов для операции");
      }
  
      switch (operation) {
        case 'add':
          return args.reduce((a, b) => a + b);
        case 'subtract':
          return args.reduce((a, b) => a - b);
        case 'multiply':
          return args.reduce((a, b) => a * b);
        case 'divide':
          if (args.includes(0)) {
            throw new MathError("Деление на ноль");
          }
          return args.reduce((a, b) => a / b);
        default:
          throw new MathError("Неверная операция");
      }
    } catch (error) {
      console.error(`Ошибка: ${error.name} - ${error.message}`);
    }
  }
  
  
  console.log(calculate('add', 1, 2, 3)); // 6
  console.log(calculate('divide', 10, 0)); // Ошибка: MathError - Деление на ноль
  console.log(calculate('subtract')); // Ошибка: MathError - Нет аргументов для операции
  