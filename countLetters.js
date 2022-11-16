const assertEqual = function(actual, expected) {
  const errorMsg = `🔴🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log( `✅✅✅✅ Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(errorMsg);
  }
};

const countLetters = function(sentence) {
  let allWords = sentence.toLowerCase();
  let counter = {};
    for (let count of allWords) {
      if(count !== " ") {
        if(!counter[count]) {
          counter[count] = 1;
      } else {
        counter[count]++;
      }
    }
  } 
  return counter;
};