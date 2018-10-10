//proveriti da li je niska palindrom

/*var s = 'anavolimilovana';

var i;
var j;
var pal = true;

for (i = 0, j = s.length - 1; pal && i < j; i++ , j--) {

    if (s[i] != s[j]) {
        pal = false;
    }

}
if (pal == true) {
    console.log('String is pal!.');

} else {
    console.log('String is not pal.');
}*/


//break moze da se koristi u if petlji, kada se naidje na break prekida se dalje izvrsavanje koda
/*for (i=0; i<6; i++) {
    console.log(i);
    if (i==3){
        break;
    }
}   console.log(i);*/



//Od javascript ispisati tpircsavaj

/*var a = "javascript";
var i;

var s = "";

for (i = a.length - 1; i >= 0; i--) {
    s = s + a[i];
} console.log(s); */

//Zadatak 1
/*function max(a, b) {
    var rezultat;
    if (a > b) {
        rezultat = a;
    } else {
        rezultat = b;

    } 
    return rezultat;
}
var final_rezultat = max(15, 7);
console.log(final_rezultat);*/

//zadatak 2
/*function given(a) {
    var rezultat;
    if (a % 2 != 0) {
        rezultat = "Broj je neparan";
    } else {
        rezultat = "Broj je paran";
    } 
    return rezultat;
}
var finalni_rezultat = given(15);
console.log(finalni_rezultat);*/

//Zadatak 4 varijanta bez funkcije
/*var a = [1, 2, 5, 7];
var i;
var s = 0;
var aritmeticka_sredina = 0;
for (i = 0; i < a.length; i++) {
    s = s + a[i];

}
aritmeticka_sredina = s / a.length;
console.log(aritmeticka_sredina);*/

//Zadatak 4 varijanta sa funkcijom i nizom
/*function ar(a) {
    var sum = 0;
    var aritmeticka_sredina = 0;
    for (i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    rezultat = sum / a.length;
    return rezultat;
} 
var konacni_rezultat = ar([15, 12, 12, 32]);
console.log(konacni_rezultat);*/


//Zadatak 3
/*function three(a) {
    var rezultat;
    if (a >= 100 && a < 1000) {
        rezultat = "trocifren je broj"
    } else {
        rezultat = "broj nije trocifren"
    }
    return rezultat;
}

var konacan_rezultat = three(105);
console.log(konacan_rezultat);*/

//Zadatak 4 varijanta sa funkcijom bez niza
/*function ar(a, b, c, d) {
    var rezultat;
    rezultat = (a + b + c + d) / 4;
    return rezultat;
}
var zavrsni_rezultat = ar(4, 17, 19, 109);
console.log(zavrsni_rezultat);
*/

//Zadatak 7 varijanta sa petljom

/*var a = 230;
var i;
var sum = "";
sum = sum + a;
for (i = 0; i < sum.length; i++) {

}
console.log(sum.length);*/

//Zadatak 7 sa funkcijom
/*function number(a) {
    var result;
    var sum = "";
    sum = sum + a;
    for (i = 0; i < sum.length; i++) {

    }
    result = sum.length;
    return result;
}
var final_result = number(29393);
console.log(final_result);*/

//Zadatak 8 bez funkcije
/*var a = [2, 4, 7, 8, 7, 7, 1];
var e = 7;
var i;
var s = 0;
for (i = 0; i < a.length; i++) {
    if (a[i] == e) {
        s++;

    }
} console.log(s);
*/


//Zadatak 8 sa funkcijom
/*function niz(a, e) {
    var rezultat;
    var s = 0;
    var i;
    for (i = 0; i < a.length; i++) {
        if (a[i] == e) {
            s++;
        }
    }
    rezultat = s;
    return rezultat;
}
var finalni_rezultat = niz([3, 4, 5, 6, 7, 3, 4, 3, 6, 3, 9], 3);
console.log(finalni_rezultat);
*/
//Zadatak 9 bez funkcije
/*var a = [2, 3, 4, 7, 8, 9];
var s = 0;
var i;
for (i = 0; i < a.length; i++) {
    if (a[i] % 2 != 0) {
        s = s + a[i];
    }
}
console.log(s);*/

//Zadatak 9 sa funkcijom
/*function odd(a) {
    var result;
    var sum = 0;
    var i;

    for (i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            sum = sum + a[i];
        }
    }
    result = sum;
    return result;
}
var final_result = odd([3, 4, 7, 9, 13]);
console.log(final_result);
*/

//Zadatak 10 bez funkcije nije zavrsen

var a = "Aleksandra";
var b = "A";
var i;
var malo_a = "a";
var sum = 0;
for (i = 0; i < a.length; i++) {
    if (b == a[i] || malo_a == a[i]) {
        sum++;
    }
}
console.log(sum);

