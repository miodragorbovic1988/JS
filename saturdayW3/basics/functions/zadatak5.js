//5.Zadatak Write a function that checks if the two arrays are equal.

function checker(arrayFirst, arraySecond) {
  var check = false;
  var checkFirst;
  var checkeSecond;
  for (var i = 0; i < arrayFirst.length; i++) {
    checkFirst += arrayFirst[i];
  }
  for (var j = 0; j < arraySecond.length; j++) {
    checkeSecond += arraySecond[i];
  }
  if (checkFirst[i] == checkeSecond[j]) {
    check = true;
  }
  return check;
}
var final = checker([3, 4, 5, 6, 1], [3, 4, 22, 6, 1]);
console.log(final);
