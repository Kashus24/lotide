const reverseMe = function(data) {
let reversed = '';
let backRev
  for (i = data.length -1; i > 0 - 1; i--) {
    reversed += data[i];
  if (data[i] === " " || data[i] === ", ") {
    reversed += "\n";
    }
  } return reversed;

};