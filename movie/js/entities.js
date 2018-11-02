function Movie(name, duration, genre) {
    this.name=name;
    this.duration=duration;
    this.genre=genre;
}
function Duration(durationLength) {
    this.durationLength=durationLength;
}
function Genre(movieGenre) {
    this.movieGenre = movieGenre;
}
Genre.prototype.getData() = function () {
  return movieGenre.charAt(firstIndex) + movieGenre.charAt(lastIndex);

};
Movie.prototype.getData = function () {
    var getMovieData;
    return getMovieData = this.name +', '+this.duration+', '+this.genre.getData;
};

