import buildFilmList from './make-film-list.js';



const URL = 'https://ghibliapi.herokuapp.com/films';
fetch(URL).then(response => response.json())
    .then(results => {
        buildFilmList(results);
    });