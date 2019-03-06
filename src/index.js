import loadList from './list-component.js';
import loadHeader from './header-component.js';

loadHeader(false);
const URL = 'https://ghibliapi.herokuapp.com/films';

fetch(URL) 
    .then(response => response.json())
    .then(films => {
        loadList(films);
    })
    .catch(err => {
        console.error('fetch error', err);
    });
