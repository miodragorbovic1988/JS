vas s = new String("dobro jutro");
var newS = s.toUpperCase();
console.log(newS);

vas s = new String("dobro jutro");
var position = s.indexOf("j");
console.log(position);

vas s = new String("dobro jutro");
var newS = s.slice(3, 6);

vas s = new String("dobro jutro");
var array = s.split('o'); //" "dva elementa posebno, "" svaki karakter posebno
console.log(array);

var a = new Array(4, 3, 11, 42, 3); // rezultat prazan niz bez parametara, npr. 4 - prazan niz duzine 4
console.log(a);

a.indexOf(3);
var position = a.indexOf(3);// a.lastIndexOf(3); -1 rezultat za elemente koji se ne nalaze u nizu
console.log(position);

var a = new Array(4, 3, 11, 42, 3);
var arrayAsString = a.join(':');//"" sve spojeno; prazna zagrada dodaje zarez kao separator
console.log(arrayAsString);

console.log(typeof arrayAsString);

var a = new Array(4, 3, 11, 42, 3);
a.sort(); //leksikografsko sortiranje; f-ja trajno menja niz
console.log(a);

var a = new Array(4, 3, 11, 42, 3);
a.sort(function (element1, element2) {
    return element1 - element2; // ili element2 - element1
}) //f-ja se poziva za neleksikografsko sortiranje niza
console.log(a);


var a = new Array("C++", "JS", "Python", "PHP", "Java");
//sortirati po duzini elemenata: js, c++, php, java, python
a.sort(function (string1, string2) {
    if (string1.length > string2.length) {
        return 1
    }
    if (string1.length < string2.length) {
        return -1;

        /* if(string1.length==string2.length){
             return 0;*/
    }
});

//sami pisemo f-ju sort - selection sort

var a = [11, 5, 2, 8, 9];

function sort(array) {

    var i;
    var j;

    for (i = 0; i < array.length; i++) {

        var element = array[i];

        for (j = i + 1; j < array.length; j++) {
            if (array[j] < element) {
                var tmp = array[j];
                array[j] = element;
                element = tmp;
            }
        }
        array[i] = element; // element na odgovarajucoj poziciji

    }
}
sort(a);
console.log(a);

//

console.log(Math.sqrt(16));
console.log(Math(PI));

var base = 3;
var exp = 4;
console.log(Math.pow(base, exp));

console.log(Math.pow(3,4));

//

//this u funkcijama je trenutni objekat, pocetna vrednost za this je prazan objekat

function Person(name, surname, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.age = (function () {
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
 
        var birthDate = new Date(dateOfBirth);
        var yearOfBirth = birthDate.getFullYear();
 
        return currentYear - yearOfBirth;
    })();
 
    this.getData = function () {
        return this.name + " is " + this.age + " years old";
    }
 }


 //

 var a = [4,6,7,9,34];
 for( var i =0; i<a.length; i++) {
     console.log(a[i]);
 


    }
    var a = [4,6,7,9,34];
    for (var i in a) {
        console.log(i);
    }


//Kupimo elemente naseg niza
    var a = [4,6,7,9,34];
    for (var i in a) {
        console.log(a[i]);
    }


    //Objekat u objektu
     var o = {
         x:10,
         y: 11,
         z: 20
     };

     for (var property in o) {
        console.log(property);
     }
////////////////////////////////
     var o = {
        x:10,
        y: 11,
        z: 20
    };

    for (var property in o) {
       console.log(o[property]);
    }

    ////////////////////////

    var obj = new Object();
    obj.x = 10;
    obj.y = 20;

    Object.defineProperty(obj, 'z', {
        value: 30,
        writable: false, 
        enumerable: true,
        configurable: true
    });

    obj.z =15;
    
    console.log(obj);
