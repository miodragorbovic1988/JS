/* 1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]*/


function repeatStringNumTimes(array, times) {

    var string = [];
    string = array.toString();
    if (times > 0) {

        string = string.repeat(times);
        return string.split();
    }


    else {
        return "";
    }
}

var result = repeatStringNumTimes([2, 4, 7, 11, -2, 1], 2);
console.log(result);

//2. Write a functional expression that removes all duplicates in a given array.
//Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
//Output: [1, 4, 8, 9, 12, 13] 



function removeDuplicates(arr) {
    var unique_array = [];
    for (var i = 0; i < arr.length; i++) {
        if (unique_array.indexOf(arr[i]) == -1) {
            unique_array.push(arr[i]);
        }
    }
    return unique_array;
}

var final = removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]);
console.log(final);


//3.  Write a function that checks if a given array has odd number of elements.
//Input: [1, 2, 9, 2, 1]
//Output: true
//a.
function oddElements(array) {

    if (array.length % 2 == 1) {
        return true;
    } else {
        return false;
    }

}
var final = oddElements([1, 2, 9, 2, 1]);
console.log(final);

//b. Write a function that counts the number of elements less than the middle element.
// If the given array has an even number of elements, print out an error message. 
//Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
//Output: 4

function elementCounter(array) {
    var middleIndex = (array.length - 1) / 2;
    var counter = 0;
    for (var i = 0; i < array.length; i++) {

        // Andjelka was here :) 
        // umesto if(middleIndex[i] > array[i]){
        if (array[middleIndex] > array[i]) {
            counter++;
        }
    }

    //return counter;
}


// 4.Write a function that finds the smallest element of a given array.
//The function should return an object that contains the smallest value and its last position in the array.
//Input: [1, 4, -2, 11, 8, 1, -2, 3]
//Output:  { minValue: -2, minLastIndex: 6 }



function min(numbers) {
    var smallest = Math.min.apply(null, numbers);
    // proveriti ovu linijicu: <3
    var indexOfsmallest = indexOf.smallest.indexOf();
    var newObject = { smallest, indexOfsmallest };


    return newObject;
}
var final = min([1, 4, -2, 11, 8, 1, -2, 3]);
console.log(final);
