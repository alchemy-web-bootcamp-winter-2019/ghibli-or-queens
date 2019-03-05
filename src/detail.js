import makeDetailTemplate from './make-detail-template.js';
const filmDetail = document.getElementById('film-detail');

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');

if(!id) {
    window.location = './';
}

const url = `https://ghibliapi.herokuapp.com/films/${id}`;

fetch(url)
    .then(response => response.json())
    .then(result => {
        loadFilmDetail(result);
    });

function loadFilmDetail(film) {
    const dom = makeDetailTemplate(film);
    filmDetail.appendChild(dom);
}