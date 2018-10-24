//3.Zadatak  Write a function that outputs array of every second character
//from the provided string. In case that string is not provided outputs array empty array.

function secondCharacter(array) {
  var second = "";
  for (var i = 0; i < array.length; i += 2) {
    second += array[i];
  }
  return second;
}
var final = secondCharacter("a2b4c6e8");
console.log(final);
