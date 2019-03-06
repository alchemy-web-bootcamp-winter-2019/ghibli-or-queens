export function makeListTemplate(film) {
    const html = /*html*/
    `<li><a href="film-detail.html?id=${film.id}">${film.title} </a>(${film.release_date})</li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const filmList = document.getElementById('film-list');

export default function loadList(films) {
    films.forEach(film => {
        const dom = makeListTemplate(film);
        filmList.appendChild(dom);
    });
}