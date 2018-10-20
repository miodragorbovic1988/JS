//9.Zadatak Write a function that replaces all white spaces with dash (-)

function replace(array, separator) {
  replacement = "";
  separator = separator || " ";
  for (var i = 0; i < array.length; i++) {
    if (array[i] == " ") {
      array[i] = "-";
    }
    replacement += array[i];
  }
  return replacement;
}
var final = replace("im doing some tasks");
console.log(final);
