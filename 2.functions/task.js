// Задание 1
function getArrayParams(arr) {
  // Найти кол-во всех чисел
  let elementsCount = arr.length;
  //console.log("elementsCount: " + elementsCount);

  //Найти сумму всех чисел и минимальное, максимальное значение
  let sum = 0;
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < elementsCount; i = i + 1) {
    //console.log(i);
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
    //if (arr[i] > 100) {
    //  console.log ("Ошибка: " + (i+1) + " элемент массива > 100");
    //  return {min:0, max:0, avg:0};
    //}
    sum = sum + arr[i];
  }
  //console.log ("максимум " + max);
  //console.log ("минимум " + min);
  //console.log ("сумма: " + sum);

  // Сравнить числа между собой
  // Найти среднее арифметическое 
  let avarage = sum / elementsCount;
  avarage = avarage.toFixed(2);
  avarage = Number(avarage);

  // Возвращаем результат
  return { min: min, max: max, avg: avarage };
}

console.log(getArrayParams([-99, 99, 10]));
console.log(getArrayParams([1, 2, 3, -100, 10]));
console.log(getArrayParams([5]));

// Задание 2

function worker(arr) {
  console.log("arraySum");
  let sum = 0;
  for (let i = 0; i < arr.length; i = i + 1) {
    sum = sum + arr[i];
  }
  // Ваш код
  return sum
}

function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    let sumOfArr = func(arrOfArr[i]);
    console.log(i + ') ' + sumOfArr);
    if (sumOfArr > max)
      max = sumOfArr;
  }
  return max;
}


// Задание 3
function maxMinDiff(arr) {
  // Ваш код

  let min = arr[0];
  let max = arr[0];

  // hfkyg hil 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      console.log ("max " + max);
    }
    if (arr[i] < min) {
      min = arr[i];
      console.log ("min: " + min);
    } 
  }

  return Math.abs(max - min);
}

