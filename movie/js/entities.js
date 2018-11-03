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