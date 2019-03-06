import { loadHeader } from './header.js';
import { loadFilms } from './film-list.js';

loadHeader();

const url = 'https://ghibliapi.herokuapp.com/films';

fetch(url)
    .then(response => response.json())
    .then(results => {
        loadFilms(results);
    });