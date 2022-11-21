const tail = require('../tail');
const assertEqual = require('../assertEqual');

const array = ["one", "two", "three", "four"];

assertEqual(tail(array),"four");