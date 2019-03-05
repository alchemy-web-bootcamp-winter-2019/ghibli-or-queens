import loadMovieList from './movie-list-component.js';



const URL = 'https://ghibliapi.herokuapp.com/films';

fetch(URL) 
    .then(response => response.json())
    .then(movies => {
        loadMovieList(movies);
    })
    .catch(err => {
        alert(err.message);
    });

