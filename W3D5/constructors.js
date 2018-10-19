var misa = {
  username: "Misa",
  password: "123456",
  changePassword: function (newPassword) {
    misa.password = newPassword;
  }
};

console.log(misa.password);
misa.changePassword("abcdef");
console.log(misa.password);

var gisa = {
  username: "Gisa",
  password: "gisacar",
  changePassword: function (newPassword) {
    gisa.password = newPassword;
  }
};

console.log(gisa.password);
gisa.changePassword("gisagenije");
console.log(gisa.password);


///////////////////////

var misa = {
  username: "Misa",
  password: "123456",
  changePassword: function (newPassword) {
    this.password = newPassword; // 'this' u objektu predstavlja tekuci objekat
  }
};

console.log(misa.password);
misa.changePassword("abcdef");
console.log(misa.password);




////// KONSTRUKTOR FUNKCIJA ////////

function createUser(userUsername, userPassword) {
  var newUser = {};

  newUser.username = userUsername;
  newUser.password = userPassword;

  newUser.changePassword = function (newPassword) {
    newUser.password = newPassword;            // moze da stoji 'this' umesto 'newUser'
  }

  return newUser;
}


var visnja;

visnja = createUser('visnja', '1234');
console.log(visnja.username);
visnja.changePassword('abcd');
console.log(visnja.password);




///////// Pravi nacin pisanja konstruktor funkcije ///////////


function User(userUsername, userPassword) {
  // var this = {};                        // <--JS za nas ovo sam uradi, podrazumevano je

  this.username = userUsername;
  this.password = userPassword;

  this.changePassword = function (newPassword) {
    this.password = newPassword;
  }

  //  return this;                   // <--JS za nas ovo sam uradi, podrazumevano je
}


var misa = new User('Misa', '123456');

console.log(misa.username);
console.log(misa.password);



/////////////////// sta se desava ako zaboravimo new
// (koji je znak za JS da pozivamo konstruktorsku funkciju) :
// ( u ovom slucaju 'this' se odnosi na globalni objekat 'this')


function User(userUsername, userPassword) {

  this.username = userUsername;
  this.password = userPassword;

  this.changePassword = function (newPassword) {
    this.password = newPassword;
  };

}


var misa = User('Misa', '123456'); // User je sada funkcija koja vraca undefined, ali stvara globalne varijable
// username i password, kojima dodeljuje vrednost parametara

console.log(username);  // 'Misa'
console.log(password); // '123456'



///// jos prirodniji nacin pisanja konstr. funkcije:
// (parametre imenujemo kao i svojstva kojima ih dodeljujemo)

function User(username, password) {

  this.username = username;
  this.password = password;

  this.changePassword = function (newPassword) {
    this.password = newPassword;
  };
}



// 2. nacina za vracanje objekta
///////////////////

function factory(name) {
  return {
    name: name
  };
}

/////////// ovo je isto kao i:


function factory(name) {

  var newObject = {};
  newObject.name = name;

  return newObject;

}

var o = factory('one');
console.log(o.name);   // 'one'



