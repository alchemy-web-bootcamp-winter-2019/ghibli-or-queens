import loadFilms from './film-list-component.js';
import loadHeader from '../header/header-component.js';

loadHeader(false);

const URL = 'https://ghibliapi.herokuapp.com/films';

fetch(URL)
    .then(response => response.json()) // get the body from json
    .then(films => {
        loadFilms(films); // once you have the json, run function to load films onto page
    })
    .catch(err => {
        /* eslint-disable-next-line */
        console.error('Fetch error:', err); // if something goes wrong, show error message
    });