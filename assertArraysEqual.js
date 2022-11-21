const eqArrays = require('./eqArrays');


const assertArraysEqual = function(actual, expected) {
  const errorMsg = `🔴🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`;
  if (eqArrays(actual, expected) === true) {
  console.log(`✅✅✅✅ Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(errorMsg);
  }
};




module.exports = eqArrays;