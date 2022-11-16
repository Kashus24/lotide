const assertEqual = function(actual, expected) {
  const errorMsg = `🔴🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log( `✅✅✅✅ Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(errorMsg);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let counted = {}
  for (item of allItems) {
  if(itemsToCount[item]) {
    if (counted[item]) {
      counted[item]++;
    } else {
      counted[item] = 1;
    }
    } 
  }
  return counted;
};
