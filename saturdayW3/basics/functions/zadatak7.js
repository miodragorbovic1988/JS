//7.Zadatak  Write a function that prints out number of input arguments of the function.
function number(num1, num2) {
  return arguments.length;
}
var final = number(23, 5);
console.log(final);
