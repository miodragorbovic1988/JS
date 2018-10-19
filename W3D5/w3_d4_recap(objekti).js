var author = {
  name: "George R.R. Martin",
  yearOfBirth: 1948,
  write: (function() {
    console.log("Writing...."); // return undefined
  })()
};

author.write; // je svojstvo a ne metoda, jer se funkcija odmah izvrsila

//////

var author = {
  name: "George R.R. Martin",
  yearOfBirth: 1948,
  write: (function() {
    return console.log("Writing....");
    //return undefined i u ovom slucaju!, dakle svojstvo a ne metod
  })()
};

author.write; /// <- fale nam zagrade, da bi se funkcija izvrsila

/////////////////////
var author = {
  name: "George R.R. Martin",
  gender: "male",

  quotes: [undefined]
};

delete author.quotes[0];
delete author.country;

console.log(author);
