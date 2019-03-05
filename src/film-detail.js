import { createTable } from './film-detal-component.js';

const tableNode = document.getElementById('movie-table');
const searchParams = new URLSearchParams(window.location.search);
const filmId = searchParams.get('id');
const URL = `https://ghibliapi.herokuapp.com/films/${filmId}`;



fetch(URL)
    .then(response => response.json())
    .then(result => {
        tableNode.appendChild(createTable(result));
    })
    .catch(error => error.message);

