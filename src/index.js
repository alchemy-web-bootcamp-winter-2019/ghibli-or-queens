import loadFilms from './load-films.js';
import { loadFilmDetail } from './film-detail.js';

const url = 'https://ghibliapi.herokuapp.com/films';

fetch(url)
    .then(response => response.json())
    .then(result => loadFilms(result));

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
const urlId = `https://ghibliapi.herokuapp.com/films/${id}`;

fetch(urlId)
    .then(response => response.json())
    .then(result => loadFilmDetail(result));