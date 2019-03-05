export function makeFilmList(film) {
    const html = /*html*/
    `<li>
        <a href="film-detail.html?id=${film.id}">${film.title}</a><span> (${film.release_date})</span>
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;

    return template.content;
}

const filmList = document.getElementById('film-list');

export default function loadFilms(films) {
    films.forEach(film => {
        const dom = makeFilmList(film);
        filmList.appendChild(dom);
    });
}