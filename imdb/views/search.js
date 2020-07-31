const movieSearch = window.location.search.substring(13, 100).trim();
const api = new FetchApi('https://movies-app-siit.herokuapp.com/');

//faci request la server sa aduci lista de filme
//cauta filme in functie de titlu in search bar-ul de pe homePage
async function displayMoviesList() {

    const arrayOfMovies = await api.getTotalMovies();
    const searchedMoviesContainer = document.getElementById("moviesSearchedByUser");

    let foundMovies = arrayOfMovies.filter(movie => {
            return movie.Title.includes(movieSearch);
        })
        // movieSearch.match(/foundMovies.Title/i);

    for (let i = 0; i < foundMovies.length; i++) {
        const newMovie = new Movie(
            foundMovies[i]._id,
            foundMovies[i].Title,
            foundMovies[i].Poster,
            foundMovies[i].Year,
            foundMovies[i].imdbRating,
            foundMovies[i].Genre,
            foundMovies[i].Runtime,
            foundMovies[i].Language,
            foundMovies[i].Plot,
            foundMovies[i].Actors);
        const movieDiv = newMovie.showMovies();
        searchedMoviesContainer.appendChild(movieDiv);
    }
}

displayMoviesList();

async function displayMoviesListByGenre() {

    const getMoviesResponse = await api.getMoviesList();
    let arrayOfMovies = getMoviesResponse.results;
    const searchedMoviesContainer = document.getElementById("moviesSearchedByGenre");
    const inputGenre = document.getElementById("genreInput").value;
    console.log(arrayOfMovies);
    console.log(inputGenre)

    let foundMovies = arrayOfMovies.filter(movie => {
        console.log(movie.Genre)
        return movie.Genre != undefined && movie.Genre.includes(inputGenre);
    })

    for (let i = 0; i < foundMovies.length; i++) {
        const newMovie = new Movie(
            foundMovies[i]._id,
            foundMovies[i].Title,
            foundMovies[i].Poster,
            foundMovies[i].Year,
            foundMovies[i].imdbRating,
            foundMovies[i].Genre,
            foundMovies[i].Runtime,
            foundMovies[i].Language,
            foundMovies[i].Plot,
            foundMovies[i].Actors);
        const movieDiv = newMovie.showMovies();
        searchedMoviesContainer.appendChild(movieDiv);
    }
}

async function displayMoviesListByLanguage() {

    const getMoviesResponse = await api.getMoviesList();
    let arrayOfMovies = getMoviesResponse.results;
    const searchedMoviesContainer = document.getElementById("moviesSearchedByLanguage");
    const inputLanguage = document.getElementById("languageInput").value;

    let foundMovies = arrayOfMovies.filter(movie => {
        return movie.Language != undefined && movie.Language.includes(inputLanguage);
    })

    for (let i = 0; i < foundMovies.length; i++) {
        const newMovie = new Movie(
            foundMovies[i]._id,
            foundMovies[i].Title,
            foundMovies[i].Poster,
            foundMovies[i].Year,
            foundMovies[i].imdbRating,
            foundMovies[i].Genre,
            foundMovies[i].Runtime,
            foundMovies[i].Language,
            foundMovies[i].Plot,
            foundMovies[i].Actors);
        const movieDiv = newMovie.showMovies();
        searchedMoviesContainer.appendChild(movieDiv);
    }
}

async function displayMoviesListByYear() {

    const getMoviesResponse = await api.getMoviesList();
    let arrayOfMovies = getMoviesResponse.results;
    const searchedMoviesContainer = document.getElementById("moviesSearchedByYear");
    const inputYear = document.getElementById("yearInput").value;

    let foundMovies = arrayOfMovies.filter(movie => {
        return movie.Year.includes(inputYear);
    })

    for (let i = 0; i < foundMovies.length; i++) {
        const newMovie = new Movie(
            foundMovies[i]._id,
            foundMovies[i].Title,
            foundMovies[i].Poster,
            foundMovies[i].Year,
            foundMovies[i].imdbRating,
            foundMovies[i].Genre,
            foundMovies[i].Runtime,
            foundMovies[i].Language,
            foundMovies[i].Plot,
            foundMovies[i].Actors);
        const movieDiv = newMovie.showMovies();
        searchedMoviesContainer.appendChild(movieDiv);
    }
}

async function displayMoviesListByRating() {

    const getMoviesResponse = await api.getMoviesList();
    let arrayOfMovies = getMoviesResponse.results;
    const searchedMoviesContainer = document.getElementById("moviesSearchedByRating");
    const inputRating = document.getElementById("ratingInput").value;

    let foundMovies = arrayOfMovies.filter(movie => {
        return movie.imdbRating != undefined && movie.imdbRating.includes(inputRating);
    })

    for (let i = 0; i < foundMovies.length; i++) {
        const newMovie = new Movie(
            foundMovies[i]._id,
            foundMovies[i].Title,
            foundMovies[i].Poster,
            foundMovies[i].Year,
            foundMovies[i].imdbRating,
            foundMovies[i].Genre,
            foundMovies[i].Runtime,
            foundMovies[i].Language,
            foundMovies[i].Plot,
            foundMovies[i].Actors);
        const movieDiv = newMovie.showMovies();
        searchedMoviesContainer.appendChild(movieDiv);
    }
}