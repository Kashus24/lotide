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

assertArraysEqual([1,2,3,4], [1,2,3,4,5]);

