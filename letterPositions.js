const letterPositions = function(sentence) {
  
  const results = {};
    for (let i = 0; i < sentence.length; i++) {
     if(sentence[i] !== " ") {
       if(!results[sentence[i]]) {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]].push(i);
      }
    }
   
    } 
  return results;
}
  
console.log(letterPositions("lighthouse in the house"));

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
