

// Задание 1

function getRandomArbitrary() {
  return Math.random() * 200-100;
}

function getArrayParams(arr) { 
//- добавить в массив элементы от -100 до 100
  for (let i = 0; i <= 100; i++) {
    arr[i]=getRandomArbitrary(-100,100);
  } 

  let min=arr[0];
  let max=arr[0];
  let sum=arr[0];
  let avg=Number((sum/arr.lenght).toFixed(2));
  
  for (let i =1; i<arr.length();i++) {
    if (min>arr[i]) {
      min=arr[i];
    }
    if (max>arr[i]) {
      max=arr[i];
    }
    sum+=arr[i]; 
    }
  // Ваш код

  return { min: min, max: max, avg: avg };
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
