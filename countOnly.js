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
/*
const countOnly = function(allItems, itemsToCount) {
  let counted = {};
  for (item of allItems) {
    if(itemsToCount[item]) {
      if(!counted[item]) {
        counted[item] = 1;
      } else {
        counted[item] += 1;
      }
    } 
  
  } 
  return counted;
};
*/

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
//assertEqual(result1["Agouhanna"], undefined);
