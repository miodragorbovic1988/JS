function Genre(movieGenre) {
    this.genre = movieGenre;
}

Genre.prototype.getData = function () {
    var lastIndex = this.genre.length - 1;
    return this.genre.charAt(0).toUpperCase() + this.genre.charAt(lastIndex).toUpperCase();
};

function Movie(name, duration, genre) {
    this.name = name;
    this.duration = duration;
    this.genre = genre;
}

Movie.prototype.getData = function () {
    return this.name + ', ' + this.duration + ', ' + this.genre.getData();
};




// ************************************** 

(function () {

    function Genre(movieGenre) {
        this.name = movieGenre;
    }
    function Movie(title, genreObj, length) {
        this.title = title;
        this.genre = genreObj;
        this.length = length;
    }
    function Program(date, number) {
        this.date = date;
        this.number = number;
    }
    function Festival(name, number) {
        this.name = name;
        this.number = number;
    }

    Genre.prototype.getGenreData() = function () {
        var capitalIndexChar;
        capitalIndexChar = movieGenre.charAt(firstIndex) + movieGenre.charAt(lastIndex);
        capitalIndexChar = capitalIndexChar.toUpperCase();
        return capitalIndexChar;
    }
    Movie.prototype.getData() = function () {
        return this.title + ', ' + this.length + ', ' + this.genre.getData();
    }
    Program.prototype.addMovie() = function () {
        var movieList = [];
        this.movieList.push(movie);
    }
    Festival.prototype.addProgram() = function () {
        var listOfPrograms = [];

    }

})();