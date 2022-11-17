const eqArrays = function(first, second) {
  if (first === second) {
    return true;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i])
    return false;
  }
  return true;
};

const eqObjects = function(object1, object2) {
  
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    }
    for (let list of Object.keys(object1)) {
      if (Array.isArray(object1[list]) || Array.isArray(object2[list])) {
        if ( !eqArrays(object1[list],object2[list]) ) {
          return false;
        }
      }
      else if (object1[list] !== object2[list]) {
        return false;
      }
    }
    return true;
  };
  

const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const errorMsg = `🔴🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`;
  if (eqObjects(object1, object2) === true) {
  console.log(`✅✅✅✅ Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(errorMsg);
  }
};


