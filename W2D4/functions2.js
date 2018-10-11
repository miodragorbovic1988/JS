//Zadatak 1 Write a function to check whether the `input` is a string or not

/*function input(a) {
    var result;
    if (typeof a == "string") {
        result = true;

    } else {
        result = false;

    } return result;
}
var answer = input("fadsfasd");
console.log(answer);
*/

//2.Zadatak Write a function to check whether a string is blank or not.

/*function check(a) {
    var string;

    if (typeof a == "string" && a != 0 && a == "") {
        string = true;
    } else {
        string = false;
    } return string;
}

var jelenakraljicasvemiraisvegastopostojinasvetu = check(0);
console.log(jelenakraljicasvemiraisvegastopostojinasvetu);
*/

//Zadatak 3 Write a function that concatenates a given string n times (default is 1)

/*function concatenate(string, number) {
    var result = "";
    for (var i = 1; i <= number; i++) {
        result += string;
    }
    return result;
}
var jelenakraljicasvemiraisvegastopostojinasvetu = concatenate("fg", 3);
console.log(jelenakraljicasvemiraisvegastopostojinasvetu);
*/

//Zadatak 4 Write a function to count the number of letter occurrences in a string.

/*function letter(a, b) {
    var num = 0;
    var i;
    for (i = 0; i < a.length; i++) {
        if (a[i] == b) {
            num++;
        }
    } return num;
}
var final = letter("andrija", "n");
console.log(final);
*/

//Zadatak 5 Write a function to find the position of the first occurrence of a character in a string.
//The result should be in human numeration form.
//If there are no occurrences of the character, the function should return -1.

/*function first_occurance(a, b) {
    var num;
    var i;
    for (i = 0; i < a.length; i++) {
        if (a[i] == b) {
            num = i + 1;
            break;
        } else {
            num = -1;
        }
    } return num;

}
var final = first_occurance("marijan", "n");
/console.log(final);*/

//Zadatak 6: Write a function to find the position of the last occurrence of a character in a string. 
//The result should be in human numeration form. 
//If there are no occurrences of the character, function should return -1.

function last_occurance(a, b) {
    var num;
    var i;
    for (i = 0; i <= a.length; i--) {
        if (a[i] === b) {
            num = i + 1;
        } else {
            num = -1;
        }
    } return num;
}
var answer = last_occurance("ygeiiidges", "i");
console.log(answer);


