const tail = require('../tail');
const assert = require('chai').assert;


// const array = ["one", "two", "three", "four"];

// assertEqual(tail(array),"four");


describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 3);
  });

  it("returns '3' for ['3']", () => {
    assert.strictEqual(tail(['5']), '5'); 
  });


});
