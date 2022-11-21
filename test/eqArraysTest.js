const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

const array = ["hi", "yoy", "haaa"];
const array2 = ["hi", "yoy", "haaa"];

assertEqual(eqArrays(array, array2), true);