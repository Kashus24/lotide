const map = function(array, cb) {
  const results = [];

  for (item of array) {
    results.push(cb(item));
   }
    return results;
}
const words = ["halo", "cod", "GTA", "Elden Ring"];



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
  console.log(`✅✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(errorMsg);
  }
};

//const results1 = map(words, word => word.length);

