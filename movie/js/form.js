function getMovieFunction() {
    var title = document.querySelector(".firstInput").value;
    var length = document.querySelector(".secondInput").value;
    var selectedGenre = document.querySelector("#movieGenre").value;

    var genre = new Genre(selectedGenre);
    var movie = new Movie(title, length, genre);

    //console.log(movie.getData());

    document.querySelector("#allMovieData").innerHTML = movie.getData();
}



// ******************************** 