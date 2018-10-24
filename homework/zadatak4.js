//4.Zadatak  Write a function that checks if the first and the last element in the array or string are the same.

function checker(array) {
  var check = false;
  for (var i = 0; i < array.length; i++) {
    if (array[0] == array[array.length - 1]) {
      check = true;
    } else {
      check = false;
    }
  }
  return check;
}
var final = checker([3, 4, 5, 6, 7, 8, 5]);
console.log(final);
