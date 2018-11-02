 function getMovieFunction() {


    var movieTitle = document.querySelector(".firstInput").value;
    var movieLength = document.querySelector(".secondInput").value;
    var movieGenreI = document.querySelector("#movieGenre").value;
    //movieTitle, movieLength, movieGenre --> var movie = new Movie(......)
  
    
    var movie = new Movie(movieTitle,movieLength,movieGenreI);
    //movie.getMovieData()

    


    document.querySelector("#allMovieData").innerHTML = movie;
  

 }

