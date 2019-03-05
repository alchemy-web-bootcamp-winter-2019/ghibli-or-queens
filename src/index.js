import buildFilmList from './film-list-components.js';

const URL = 'https://ghibliapi.herokuapp.com/films/';

fetch(URL).then(response => response.json()).then(result => buildFilmList(result));