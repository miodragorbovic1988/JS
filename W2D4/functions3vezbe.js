//1. Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

/*function insert_string(a, b, n) {
    var position_before = "";
    var position_after = "";
    var i;
    var result;

    for (i = 0; i < a.length && i < n; i++) {
        position_before += a[i];
    }
    for (i = n + 1; i < a.length; i++) {
        position_after += a[i];
    }

    result = position_before + b + position_after;

    return result;
}
var final_result = insert_string("jelena svemira", "je kraljica", 6);
console.log(final_result);
*/
//Zadatak 2 Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

function test_string(a) {
    var i;
    var test = "";

    for (i = 0; i < a.length; i++) {
        if (typeof a[i] != "undefined" && isNaN(a[i]) == false && isFinite(a[i]) == true && a[i] != null) {
            test += a[i];
        }

    }

    return test;

}
var final_test_string = test_string([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log(final_test_string);


