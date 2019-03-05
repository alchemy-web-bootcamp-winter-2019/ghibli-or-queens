import loadList from './createList.js';

const url = 'https://ghibliapi.herokuapp.com/films';

fetch(url)
    .then(response => response.json())
    .then(movieList =>{
        loadList(movieList);
    });