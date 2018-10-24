//10.  Write objects representing a book, an animal, a person.

var animal = {
    name: 'cheetah';
    naturalHabitat: 'jungle';
    abilities: 'super fast';
    averageLifeSpan: 12;
    prey: function(speedOfPrey, weightOfPrey, nameOfPrey) {
      if(speedofPrey <120 && weightOrprey <60) {
       return console.log(nameOfPrey + " will be eaten by king of speed")
      } else {
        return console.log("cheetah will run away to fight another day");
      }
    }