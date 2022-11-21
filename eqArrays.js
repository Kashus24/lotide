const assertEqual = require('./assertEqual');

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


module.exports = eqArrays;