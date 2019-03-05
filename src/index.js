import loadMovieListTemplate from './makeMovieListTemplate.js';

const apiURL = 'https://ghibliapi.herokuapp.com/films';

fetch(apiURL)
    .then(response => response.json())
    .then(result => {
        loadMovieListTemplate(result);
    });
