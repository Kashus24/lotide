const assertEqual = function(actual, expected) {
  const errorMsg = `🔴🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log( `✅✅✅✅ Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(errorMsg);
  }
};



module.exports = assertEqual;