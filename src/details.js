import loadMovieDetails from './movie-details-template.js';

const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('id');

const URL = `https://ghibliapi.herokuapp.com/films/${id}`;

fetch(URL)
    .then(response => response.json())
    .then(result => {
        loadMovieDetails(result);
    });
