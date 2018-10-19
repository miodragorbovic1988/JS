///////////////////////// Example 0

(function() {
  return console.log;
})()("Boo!");

typeof console.log("Boo");

/////////////////////////

///////////////////////// Example 1

function multiply(a, b) {
  // a← 3, b← 4
  var mResult = a * b; //12

  return function(a, b) {
    return 12 + a + b;
  };
}

var output = multiply(3, 4);
console.log(output);

///////////////////// Example 2

// klasicna deklaracija funkcije --> podleze hoistingu,cela se penje na vrh

function multiply(a, b) {
  // a← 3, b← 4

  var mResult = a * b;
  return function(a, b) {
    // a← 5, b← 5
    return 12 + a + b;
  };
}

var output = multiply(3, 4)(5, 5);
console.log(output);

////////////////////////////// Example 3

//// funkcijski izraz (kada koristimo 'var')
var print = (function() {
  return console.log;
})();

print("This might work or not?");

////////////////////////////// Example 3
var print;

//print("This might work or not?");

print = (function() {
  return console.log;
})();

///////////////////////////////// Example 6 after hoisting
var PI;

function circleSurface(radius) {
  var result;
  var PI;
  result = radius * radius * PI;
  PI = 3.14159;

  return result;
}

var output;

PI = 3.1;
output = circleSurface(5);
console.log(output);

//////////////////// Example 6 (drugi primer)

var PI;
function circleSurface(radius) {
  var result;
  result = radius * radius * PI;
  PI = 3.14159;

  return result;
}
var output;

PI = 3.14159;
output = circleSurface(5);
console.log(output);

////////////////////////////// Example 7

function circleCalc(radius, calculation) {
  //radius ← 7
  //calculation ← function (r) {
  //var PI = 3.14159;
  //return 2 * r * PI;
  //}

  var result = calculation(radius);
  return result;
}

var output = circleCalc(7, function(r) {
  var PI = 3.14159;
  return 2 * r * PI;
});

console.log(output);

// Example 10

var cubeVolume = function(a) {
  return a * a * a;
};

function cubeCalculation(a, calc) {
  return calc(a);
}

output = cubeCalculation(10, cubeVolume(6)); // argumenti: 10, 6*6*6
console.log(output); // Type Error

// Example 13

function saySomething(msg1) {
  //msg1← Hi
  return function(msg2) {
    // msg2 ← there
    var output = msg1 + " " + msg2;
    // output ← Hi there
    return function() {
      output += "!";
      console.log(output);
    };
  };
}
saySomething("Hi")("there");
saySomething("Hi")("there")(); // koristimo da bi pozvali ovu funkciju (jer return vraca funkciju)

// Example 14

var myArr = [
  function() {
    return "Hi";
  }
];

var hi = function() {
  return "Hi";
};

myArr[0] = hi;
var result = myArr[0]();

var firstElement = myArr[0];

typeof firstElement;

firstElement; // nece se izvrsiti funkcija
