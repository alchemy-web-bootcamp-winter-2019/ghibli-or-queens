import makeListTemplate from './make-list-template.js';
const filmList = document.getElementById('film-list');

export default function loadList(films) {
    films.forEach(film => {
        const dom = makeListTemplate(film);
        filmList.appendChild(dom);
    });
}