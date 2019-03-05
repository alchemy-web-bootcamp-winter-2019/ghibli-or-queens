export default function filmListTemplate(film) {
    const template = document.createElement('template');
    template.innerHTML = `
    <li><a href="film-detail.html?id=${film.id}">${film.title}</a> (${film.release_date})</li>
    `;

    return template.content;
}

const filmList = document.getElementById('film-list');

const URL = 'https://ghibliapi.herokuapp.com/films';

export function loadFilms(films) {
    films.forEach(film => {
        const dom = filmListTemplate(film);
        filmList.appendChild(dom);
    });
} 

fetch(URL)
    .then(response => response.json())
    .then(results => {
        loadFilms(results);
    });