

// Задание 1

function getArrayParams(arr) {
  let elementsCount = arr.length;
  let sum = 0;
  let max = arr[0];
  let min = arr[0]; 
  for (let i = 0; i < elementsCount; i = i + 1) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
    sum = sum + arr[i];
  }
  let avarage = sum / elementsCount;
  avarage = avarage.toFixed(2);
  avarage = Number(avarage);
  return {min:min, max:max, avg:avarage};
}
// Задание 2
function worker(arr) {
  let sum = arr.reduce(function(sum, elem) {
return sum + elem;
 }, 0);
  // Ваш код
  return sum
}

function makeWork(arrOfArr, func) {
  let max=0;
for (let i=0; i<arrOfArr.lenght; i++) {
  console.log (func(arrOfArr[i]));
  if (func(arrOfArr[i])>max);
  max = func(arrOfArr[i]);
}
 return max;
  // Ваш кода
  // for ...
  
  
}

// Задание 3
function worker2(arr) {
  // Ваш код

  let min=Infinity; //arr[0]
  let max=-Infinity; //arr[0]

  for (let i = 0; i <= arr.lenght; i++) {
    if (i > max) {
      max = i;
    }
    else if (i < min) {
      min = i;
    }
 } 
let result = Math.abs(max-min);
return result
}
