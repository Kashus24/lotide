const assertEqual = function(actual, expected) {
  const errorMsg = `🔴🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log( `✅✅✅✅ Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(errorMsg);
  }
};

const findKey = function(object, cb) {
  let other;
  for (let key in object) {
    if (cb(object[key])) {
      return key;
    }
  } return other;
};