import loadList from './load-list.js';

const url = 'https://ghibliapi.herokuapp.com/films';

fetch(url)
    .then(response => response.json())
    .then(results => {
        loadList(results);
    });



