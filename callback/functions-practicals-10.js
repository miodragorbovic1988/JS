// IIFE = Immediately Invoked Function Expressions

// Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
// 	Input array: [4, 5, 11, 9]
// 	Output array: [ 9, 5, 11, 4]


var result = (function (array) {

    var newArray = [];
    var firstE = array[0];
    var lastE = array[array.length - 1];

    for (var i = 1; i < array.length - 1; i++) {

        newArray[i] = array[i];

    }
    newArray[0] = lastE;
    newArray[newArray.length] = firstE;

    return newArray;
})([4, 5, 11, 9]);

console.log(result);




// Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
// Input: 4 5
// Output: 20

var result = (function (a, b) {

    recP = a * b;
    return recP;
})(4, 5);
console.log(result);




// Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
// 	Input: prograMming
// 	Output: progra**ing, 2

var result = (function (string) {
    var counter = 0;
    var newString = '';

    for (var i = 0; i < string.length; i++) {
        if (string[i] == 'm' || string[i] == 'M') {
            newString += '*';
            counter++;

        } else {
            newString += string[i];
        }

    } return (newString + ', ' + counter);

})('prograMming');
console.log(result);

// Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
// Input: pera peric
// 	Output: pera.peric@gmail.com


function createEmail() {
    function genEmail(name, surname) {
        return name + '.' + surname + '@gmail.com';
    }

    return genEmail;
}
console.log(createEmail()("pera", "peric"));


// Write a function that returns a function that calculates a decimal value of the given octal number. 
// Input: 034
// Output: 28

var result = (function (num) {

    return parseFloat(num);
})(034);
console.log(result);

// Write a function that checks if a given string is valid password. The password is valid if it is at least 6 characters long and contains at least one digit. The function should receive two callbacks named successCallback and errorCallback that should be called in case password is correct or invalid. 
// Input: JSGuru 
// Output: Your password is invalid!
// 	Input: JSGuru123
// 	Output: Your password is cool! 

function successCallback() {
    console.log('Your password is cool!');
}
function errorCallback() {
    console.log('Your password is invalid!');
}

function validPassword(password, success, error) {

    var counter = 0;
    if (password.length >= 6) {
        for (var i = 0; i < password.length; i++) {
            for (var j = 0; j <= 9; j++) {
                if (password[i] == j) {
                    counter++;
                }
            }
        }
    }
    else {
        error();
        return;
    }

    if (counter > 0) {
        success();
    }
    else {
        error();
    }

}

validPassword("JSGuru", successCallback, errorCallback);




// Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3] 

function isOdd(num) {
    var result = false;
    if (num % 2 == 1) {
        result = true;
    }
    return result;
}

function filter(array, odd) {
    var newArray = [];
    var counter = 0;
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (odd(element)) {
            newArray[counter] = element;
            counter++;
        }
    }
    return newArray;
}
var niz = [2, 8, 11, 4, 9, 3];
console.log(filter(niz, isOdd));