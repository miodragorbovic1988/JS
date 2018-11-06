(function() {
  console.log("Hi");

  var drama = new Genre("Drama");
  var comedy = new Genre("Comedy");
  var action = new Genre("Action");
  var thriller = new Genre("Thriller");

  Movie.prototype.createMovie = function(title, length, genre) {
    return new Movie(title, length, genre);
  };

  var movie1 = createMovie("Movie title", 120, drama);
  var movie2 = createMovie("Movie title", 100, comedy);
  var movie3 = createMovie("Movie title", 110, action);
  var movie4 = createMovie("Movie title", 113, thriller);

  Program.prototype.createProgram = function(date) {
    var program = new Program(date);
    return program;
  };

  var program1 = createProgram("23.12.2018");
  program1.addMovie(movie1);
  program1.addMovie(movie2);
  program1.addMovie(movie3);
  program1.setNumber();
  var program2 = createProgram("24.12.2018");
  program2.addMovie(movie4);
  program2.setNumber();

  Festival.prototype.createFestival = function(name, maxnumber) {
    var festival = new Festival(name, maxnumber);
    return festival;
  };

  var festival = createFestival("Our little festival", 10);
  festival.addProgram(program1);
  festival.addProgram(program2);
  festival.getData();

  function Genre(genre) {
    this.genre = genre;
  }
  Genre.prototype.getData = function() {
    var code = this.genre[0] + this.genre[this.genre.length - 1];
    return code.toUpperCase();
  };

  function Movie(title, duration, genre) {
    this.title = title;
    this.duration = parseFloat(duration);
    this.genre = genre;
  }
  Movie.prototype.getData = function() {
    return (
      "\t" + this.title + ", " + this.duration + " min, " + this.genre.getData()
    );
  };

  function Program(date) {
    this.date = date;
    this.movies = [];
    this.number = 0;
  }

  Program.prototype.getNumber = function() {
    return this.number;
  };

  Progrm.prototype.programDuration = function() {
    var programduration = 0;
    for (var i = 0; i < this.movies.length; i++) {
      programduration += this.movies[i].duration;
    }
    return programduration;
  };

  Program.prototype.setNumber = function() {
    this.number = this.movies.length;
  };

  Program.prototype.maxGenre = function() {
    var genres = ["DA", "CY", "AN", "TR"];
    var max;
    for (var i = 0; i < genres.length; i++) {
      max = 0;
      for (var j = 0; j < this.movies.length; j++) {
        if (genres[i] == this.movies[j].genre) {
          max++;
        }
      }
      if (max <= 4) {
        return true;
      } else {
        return false;
      }
    }
  };

  Program.prototype.maxProgramDuration = function() {
    if (this.programDuration() <= 8 * 60) {
      return true;
    } else {
      return false;
    }
  };

  Program.prototype.getData = function() {
    var string = "";
    string =
      "Date: " + this.date + " Number of movies: " + this.movies.length + "\n";
    for (var i = 0; i < this.movies.length; i++) {
      string += "\t" + this.movies[i].getData() + "\n";
    }
    return string;
  };

  Program.prototype.addMovie = function(movie) {
    if (this.movies) {
      if (this.maxGenre() && this.maxProgramDuration()) {
        this.movies.push(movie);
        this.number++;
      } else {
        console.log(
          "You can not have more than 4 movies of the same genre in the program or you can not have program that is more than 8 hours long!"
        );
      }
    }
  };

  function Festival(name, maxnumber) {
    this.name = name;
    this.programs = [];
    this.totalnumber = 0;
  }

  Festival.prototype.maxnumber = (function(maxnumber) {
    return parseFloat(maxnumber);
  })(maxnumber);

  Festival.prototype.addProgram = function(program) {
    if (this.totalnumber <= this.maxnumber) {
      this.programs.push(program);
      this.totalnumber += program.getNumber();
    } else {
      console.log("You can not have more than 10 movies in the festival!");
    }
  };

  Festival.prototype.getTotalNumber = function() {
    var total = 0;
    for (var i = 0; i < this.programs.length; i++) {
      total += this.programs[i].getNumber();
    }
    return total;
  };

  Festival.prototype.getProgramDuration = function() {
    var totalprogramduration = 0;
    for (var i = 0; i < programs.length; i++) {
      totalprogramduration += this.programs[i].programDuration();
    }
    return totalprogramduration;
  };

  Festival.prototype.getData = function() {
    if (this.getTotalNumber() !== 0) {
      var string = "";
      string =
        'Weekend festival "' +
        this.name +
        '" has ' +
        this.getTotalNumber() +
        " movie titles\n";
      for (var i = 0; i < this.programs.length; i++) {
        string += "\t" + this.programs[i].getData();
      }
      console.log(string);
    } else {
      console.log("Weekend festival\n\tProgram to be announced");
    }
  };

  
})();
