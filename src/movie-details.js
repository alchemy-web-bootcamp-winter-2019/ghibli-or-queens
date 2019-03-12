import loadMovieDetails from './details-component.js';

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');

if(!id) {
    window.location = './';
}

const url = `https://ghibliapi.herokuapp.com/films/${id}`;

fetch(url)
    .then(response => response.json())
    .then(result => loadMovieDetails(result));