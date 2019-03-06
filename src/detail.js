import { loadHeader } from './header.js';
import { loadFilmDetails } from './film-detail.js';

loadHeader();

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');

const url = `https://ghibliapi.herokuapp.com/films/${id}`;

fetch(url)
    .then(response => response.json())
    .then(results => {
        loadFilmDetails(results);
    });