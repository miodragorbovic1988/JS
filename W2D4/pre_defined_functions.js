//28
// 1, 2, 4, 7, 14 --> 28
//funkcija koja provereava da li je broj savrsen

/*function perfect_number(n) {
    var sum = 0;
    var i;

    for (i = 1; i <= n / 2; i++) {
        if (n % i == 0) {
            sum = sum + 1;
        }
        if (sum == n) {
            return = true;
        } else {
            return false;
        }
    }
    //return sum == n
}
var ind;
ind = perfect_number(28);
console.log(ind);

//savrseni brojevi manji od hiljadu

var n;

for (n = 1; n < 100; n++) {
    if (perfec(n))== true) {
        console.log(n);
    }
}
*/

//Koriscenje builtin funkcije parseInt

var result;

result = parseInt(true);

console.log(result);

//Koriscenje funkcije parseFloat

var result;
result = parseFloat("34");
console.log(result);

//Koriscenje funkcije isNaN

var result = 'abc' + 1;

console.log(result);
var ind;

ind = isNaN(result);

console.log(ind);

function ourNaN(n) {

    if (typeof n == 'number' && n != n) {
        return true;
    } else {
        return false;
    }
}

var result = 'abc *1';

console.log(result);

var ind;

ind = ourNaN(13);

console.log(ind);



