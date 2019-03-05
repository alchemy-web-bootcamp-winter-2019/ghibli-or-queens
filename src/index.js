import loadFilmList from './film-template.js';

const urlList = 'https://ghibliapi.herokuapp.com/films';

fetch(urlList)
    .then(response => response.json())
    .then(results => {
        loadFilmList(results);
    });