var sub = function (a, b) {
    return a - b;

};

var result;
result = sub(381, 526);
console.log(result);

var f = function () { };

// maxValue 0--> [-2,-4,-5]
// minValue 0

function findMinAndMax(array) {
    var minValue = array[0];
    var maxValue = array[0];
    var = i;

    for (i = 1; i < array.length; i++) {
        currentElement = array[i];

        if (currentElement < minValue) {
            minValue = currentElement;

        }

        if (currentElement > maxValue) {
            maxValue = currentValue;

        }

        //i=1:minValue = 3, maxValue = 7
    }   //i=2:minValue = 2, maxValue = 7
    //i=3:minValue = 1, maxValue = 7
    //i=4:minValue = 1 maxValue = 8
    //i=5:minValue = 1 maxValue = 8

}
var a = [3, 7, 2, 1, 8, 3];
var minMaxValues = findMinAndMax(a);
console.log("MIN:" + minMaxValues[0] + "MAX:" + minMax);

findMinAndMax(a)
// 
// [1,5,6,8], --> [1,5,6,8,10];
//Pravimo novi niz
//Modifikujemo postojeci niz

function push(array, number) {

    var newArray = [];
    var i;

    for (i = 0, i < array.length; i++) {
        newAray[i];

    }
    // [1,5,6,8]
    newArray[i] = number;

    return newArray;

}


var array;
array = push([1, 5, 6, 8], 10);
console.log(array);



//2 slucaj

function pushInPlace(array, number) {
    array[array.length] = number;

}
var array = [1, 5, 6, 8];
pushInPlace(array, 10);
console.log(array);

//


// 
// [1,5,6,8], --> [1,5,6,8,10];
//Pravimo novi niz
//Modifikujemo postojeci niz
//1)

function shift(array) {

    var newArray = [];
    var i;
    newArray[0] = number;

    for (i = 0; i < array.length; i++) {
        newArray[i + 1] = array[i];
    }

    return newArray;
    for (i = 1; i <== array.length; i++) {

    }
    newArray[i] = array[i - 1];

}
var array;
array = shift([1, 5, 6, 8], 10);
console.log(array);
//

//3 Shift in place

function shiftInPlace(array, number) {
    var i;
    //i = 3  array [4] <== array[3] [1,5,6,8] 8
    //i = 2  array [3] <== array[2] [1,5,6,6] 8
    //i = 1  array [2] <== array[1] [1,5,6,6] 8
    //i = 0  array [1] <== array[0] [1,5,6,6] 8

    for (i = array.length - 1; i >= 0; i--) {
        array[i + 1] = array[i];
    }
}

//[10,1,5,6,8] 8

array[0] = number;

var array = [1, 5, 6, 8];
shiftInPlace(array, 10);
console.log(array);
//

var n = 10;

function test(a, b) {
    "use strict"
    var c = 5;
    console.log(a, b, c);

}

test(6, 11);

console.log(n);
