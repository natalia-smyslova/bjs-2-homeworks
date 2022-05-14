//### Задача 1. Усовершенствуйте кэширующий декоратор

//Напишите усовершенствованный кэширующий декоратор `cachingDecoratorNew`,
//аналогичный рассмотренному на лекции, таким образом, чтобы он кэшировал только последние 5 **различных** вызовов функции.
//То есть чтобы кэш мог хранить только 5 значений.

//Для того, чтобы тесты выполнялись функция должна возвращать следующие строки(!)
//"Вычисляем: 10" для первого вызова (10 для примера) и "Из кэша: 10" для повторного.
//Подробнее смотрите в файле (tests.js)[./tests.js].

//Рекомендуется параллельно выводить результаты в консоль, чтобы вам было удобнее отлаживать.

function cachingDecoratorNew(func) {

  let cache = [];

  function wrapper(...args) {
    const hash = args.join(','); // получаем правильный хэш
    //console.log(hash);

    let idx = cache.findIndex((item) => item.hash == hash); // ищем элемент, хэш которого равен нашему хэшу
    if (idx !== -1) { // если элемент не найден
      console.log("Из кэша: " + cache[idx].value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
      return "Из кэша: " + cache[idx].value;
    }
    if (cache.length > 4) {
      cache.shift();
    }
    if (idx == -1) {
      let result = function (...args) {
        const sum = args.reduce(function (accumulator, currentValue) {
          return accumulator + currentValue;
        }, 0);
        console.log(sum);
        return sum
      }.call(this, ...args);
      console.log(result);
      //cache[idx] = { hash: hash, value: result }; // добавляем элемент с правильной структурой
      cache.push({ hash: hash, value: result });
      console.log(cache);
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  }
  return wrapper
}

//САМОСТЯТЕЛЬНАЯ ПРОВЕРКА ВЫЗОВА

// const upgradedCach = cachingDecoratorNew();
// upgradedCach(2, 2, 2);
// upgradedCach(2, 2, 2);
// console.log(upgradedCach(2, 2, 2));
// console.log(upgradedCach(3, 2, 2));
// console.log(upgradedCach(5, 5, 5));
// console.log(upgradedCach(5, 10, 10));
// console.log(upgradedCach(6, 6, 6));
// console.log(upgradedCach(4, 4, 4));
// console.log(upgradedCach(4, 4, 4));
// console.log(upgradedCach(4, 4, 4));




//### Задача 2. Debounce декоратор с моментальным вызовом

// Усовершенствуйте рассмотренный на лекции debounce декоратор таким образом,
// чтобы первый его вызов происходил моментально а следующий не
// раньше чем через интервал времени, причем интервал должен задаваться в момент применения декоратора к функции.
// Такие декораторы называются "Leading edge" или "immediate" (немедленный).
// Они применяется если события, например отправка информации, происходит слишком часто.


const showCoords = (x, y) => console.log(`Клик:(${x},${y})`);
function debounceDecoratorNew(f, ms) {
  let timeout;
  return function (...args) {
    if (timeout === undefined) {
      f(...args);
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = undefined
    }, ms);
  };
}

// // ### Задача 3. Усовершенствуйте debounceDecoratorNew
// // Представьте ситуацию, что пользователь очень часто нажимает отправить,
// // при этом наш `debounce` декоратор отправляет сообщения не чаще чем раз в интервал времени,
// // но мы хотим дополнительно знать, сколько всего раз была вызвана исходная функция.
// // Усовершенствуйте декоратор из задания 2 таким образом, чтобы в свойстве `count` декорированной функции хранилось количество вызовов.
// // Для решения используйте подход, который был применен в лекции для декоратора-шпиона.
// // Усовершенствованный декоратор должен называться `debounceDecorator2`.

function debounceDecorator2(f, ms) {
  let timeout;
  function wraper(...args) {
    if (timeout === undefined) {
      f(...args);
      wraper.count = wraper.count + 1;
      timeout = setTimeout(()=>{
        timeout = undefined
      }, ms);
    }
  }
  wraper.count = 0;
  return wraper;
}

const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal2 = debounceDecorator2(sendSignal, 2000);
setTimeout(upgradedSendSignal2); // Сигнал отправлен
setTimeout(upgradedSendSignal2, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
setTimeout(upgradedSendSignal2, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
setTimeout(upgradedSendSignal2, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (300 < 2000)
setTimeout(upgradedSendSignal2, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
setTimeout(upgradedSendSignal2, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
setTimeout(upgradedSendSignal2, 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с
setTimeout(()=>{console.log(upgradedSendSignal2.count);},5000);

