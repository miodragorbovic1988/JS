
var $button = document.querySelector('.firstButton');


$button.addEventListener('click', getMovieFunction);

function getMovieFunction(event) {
    var title = document.querySelector(".firstInput");
    var length = document.querySelector(".secondInput");
    var selectedGenre = document.querySelector("#movieGenre");


    var newTitle = title.value;
    var newLength = length.value;
    var newSelectedGenre = selectedGenre.value;

    var genre = new Genre(newSelectedGenre);
    var movie = new Movie(newTitle, newLength, genre);


    document.querySelector("#allMovieData").innerHTML += movie.getData() + '<br>';

    title.value = '';
    length.value = '';
    selectedGenre.value = '-';

    var movieSelect = document.querySelector('#movieSelect');
    var createNewOption = document.createElement('option');
    createNewOption.textContent = movie.getData()

    movieSelect.appendChild(createNewOption);


}

// var $program = document.querySelector('.createProgram');

// $program.addEventListener('click', createProgramFunction);
// function createProgramFunction(event) {
//     var newDate = date.value;
//     document.querySelector('#createdProgram').innerHTML += date.value;
// }



var $choseDate = document.querySelector('.createProgram');

$choseDate.addEventListener('click', getProgramData);

function getProgramData(event) {
    var getFullProgram = document.querySelector('.choseDate').value;

    document.querySelector("#createdProgram").innerHTML += getFullProgram + movie.getData() + '<br>';
}