import loadFilmList from './film-template.js';
import loadFilmDetails from './film-detail.js';

const urlList = 'https://ghibliapi.herokuapp.com/films';

fetch(urlList)
    .then(response => response.json())
    .then(results => {
        loadFilmList(results);
    });

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
const urlId = `https://ghibliapi.herokuapp.com/films/${id}`;


fetch(urlId)
    .then(response => response.json())
    .then(results => {
        loadFilmDetails(results);
    });   