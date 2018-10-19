var group = {
  name: "brkovi",
  numberOfMembers: 4,
  namesOfMembers: ["semso69", "prasac", "novinar"],
  city: "zagreb",
  isJazz: false,
  nextPerformance: (function () {
    return function (date) {
      return console.log("Sledeci nastup je: " + date);
    };
  })()
};
/////////// samopozivajuca funkcija bi se koristila kada mi sami automatski
// zelimo da dodelimo neko svojstvo novom objektu, npr ID

group.nextPerformance("12.3.");

////////////////////////
/////// ovakvo koristenje funkcije ima vise smisla u nasem primeru objekta:
var group = {
  name: "brkovi",
  numberOfMembers: 4,
  namesOfMembers: ["semso69", "prasac", "novinar"],
  city: "zagreb",
  isJazz: false,
  nextPerformance: function (date) {
    return console.log("Sledeci nastup je: " + date);
  }
};

group.nextPerformance("12.3.");



//////// Konstruktorska funkcija za nas objekat 'grupa'

function Group(name, numberOfMembers, namesOfMembers, city, isJazz) {

  this.name = name;
  this.numberOfMembers = numberOfMembers;
  this.namesOfMembers = namesOfMembers;
  this.city = city;
  this.isJazz = isJazz;
  this.nextPerformance = function (date) {
    return console.log("Sledeci nastup je: " + date);
  };
}
var mortalKombat = new Group('mortal kombat', 5, ['Gera', 'Coby', 'Prasac', 'nidzo', 'stevo'], 'beograd', false);
console.log(mortalKombat.namesOfMembers);
console.log(mortalKombat.nextPerformance);

mortalKombat.nextPerformance('12.3.')