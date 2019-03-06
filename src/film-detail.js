import loadDetail from './detail-component.js';
import loadHeader from './header-component.js';

loadHeader(true);

const URL = 'https://ghibliapi.herokuapp.com/films/';

const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('id');

if(!id) {
    window.location = './';
}

fetch(URL + id)
    .then(response => response.json())
    .then(film => {
        loadDetail(film);
    })
    .catch(err => {
        console.error('fetch error', err);
    });