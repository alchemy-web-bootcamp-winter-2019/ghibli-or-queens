import loadMovieTable from './movie-detail-component.js';

const searchParams = new URLSearchParams(window.location.search);
const movieID = searchParams.get('id');
console.log(movieID);

const URL = `https://ghibliapi.herokuapp.com/films/${movieID}`;

fetch(URL)
    .then(response => response.json())
    .then(movie => {
        loadMovieTable(movie);
    })
    .catch(err => {
        console.log(err.message);
    });