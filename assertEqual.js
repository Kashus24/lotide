const assertEqual = function(actual, expected) {
  const errorMsg = `🔴🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    return `✅✅✅✅ Assertion Passed:  ${actual} ===  ${expected}`;
  } else {
    return errorMsg;
  }
};
