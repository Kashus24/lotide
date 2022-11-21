const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');


const middle = function(array) {
  let finalArr = [];
  let i = 0;
    if (array.length <= 2) {
    return finalArr;
    }
    if (array.length % 2 === 0) {
      i = (array.length / 2) -1;
      finalArr.push(array[i]);
      finalArr.push(array[i + 1]); 
      return finalArr;
    }
    if(array.length % 1 === 0) {
      i = Math.floor(array.length / 2)
      finalArr.push(array[i]);
      return finalArr;
    }
};


module.exports = middle;