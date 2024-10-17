// Задание 2
// Создайте функцию, которая на вход принимает функцию-колбэк и через 
// несколько секунд возвращает некоторые данные. Используйте функцию колбэк, чтобы вывести эти данные в консоль после завершения асинхронной 
// операции. Создайте аналогичную функцию с использованием промиса,
// обработайте успешное и неуспешное выполнение промиса. Создайте 
// аналогичную функцию с использованием синтаксиса async/await, обработайте 
// успешное и неуспешное выполнение функции.
// Приведите пример параллельного выполнения нескольких асинхронных 
// функций


function getDataCallback(callback) {
    setTimeout(() => {
      const data = { id: 1, name: "John" };
      callback(null, data);
    }, 2000);
  }
  
  
  getDataCallback((err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Callback Data:", data);
    }
  });
  

  function getDataPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true; 
        if (success) {
          resolve({ id: 2, name: "Alice" });
        } else {
          reject(new Error("Ошибка при получении данных"));
        }
      }, 2000);
    });
  }
  

  getDataPromise()
    .then(data => console.log("Promise Data:", data))
    .catch(error => console.error(error));
  
  async function getDataAsync() {
    try {
      const data = await getDataPromise();
      console.log("Async/Await Data:", data);
    } catch (error) {
      console.error(error);
    }
  }
  
  getDataAsync();
  
  async function parallelExecution() {
    try {
      const [data1, data2] = await Promise.all([getDataPromise(), getDataPromise()]);
      console.log("Parallel Data 1:", data1);
      console.log("Parallel Data 2:", data2);
    } catch (error) {
      console.error("Parallel Error:", error);
    }
  }
  
  parallelExecution();
  