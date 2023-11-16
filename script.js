const movieTitleElement = document.querySelector('.movie-title');
const moviePosterElement = document.querySelector('#movie-poster');
const movieScoreElement = document.querySelector('.movie-score');
const moviePlotElement = document.querySelector('.movie-plot');
const movieReleaseDataElement = document.querySelector('.movie-release-data');
const movieActorsElement = document.querySelector('.movie-actors');

const apiKey = "76705089";
const url = `http://www.omdbapi.com/?apikey=${apiKey}`;

async function getMovieByTitle(title){
    const response = await fetch(`${url}&t=${title}`);
    const data = await response.json();
    return data;
}
async function showMovie(title) {
    try {
        const movie = await getMovieByTitle(title);
        console.log(movie);
        
        movieTitleElement.textContent = movie.Title;
        moviePosterElement.src = movie.Poster;
        movieScoreElement.textContent = `IMDb Rating: ${movie.imdbRating}`;
        moviePlotElement.textContent = movie.Plot;
        movieReleaseDataElement.textContent = `Released: ${movie.Released}`;
        movieActorsElement.textContent = `Actors: ${movie.Actors}`;
    } catch (error) {
        console.error("Error fetching movie:", error);
    }
}
showMovie("The matrix")