const eqArrays = function(first, second) {
  if (first === second) {
    return true; 
  }
  if(first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i])
    return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  const errorMsg = `🔴🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`;
  if (eqArrays(actual, expected) === true) {
  console.log(`✅✅✅✅ Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(errorMsg);
  }
};

const middle = function(array) {
  let finalArr = [];
  let i = 0;
    if (array.length <= 2) {
    return finalArr;
    }
    if (array.length % 2 === 0) {
      i = (array.length / 2) -1;
      finalArr.push(array[i]);
      finalArr.push(array[i + 1]); 
      return finalArr;
    }
    if(array.length % 1 === 0) {
      i = Math.floor(array.length / 2)
      finalArr.push(array[i]);
      return finalArr;
    }
};
