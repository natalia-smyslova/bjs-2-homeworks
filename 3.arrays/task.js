function compareArrays(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return arr1.every((elem, ind) => elem == arr2[ind]);
  } else {
    return arr2.every((elem, ind) => elem == arr1[ind]);
  }
}

function advancedFilter(arr) {
  let resultArr = arr.filter(positiveNumber => positiveNumber > 0).filter(multiple => multiple % 3 === 0).map(generation => generation * 10);
  return resultArr;
}
