import { loadMovieDescription } from '../src/film-description-component.js';

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');

if(!id){
    window.location = '/';
    console.log('nope');
}

const URL = `https://ghibliapi.herokuapp.com/films/${id}`;

fetch(URL).then(response => response.json()).then(result => {
    loadMovieDescription(result);
});
