export function filmTemplate(film) {
    const template = document.createElement('template');
    template.innerHTML = `
    <li>
        <a href="./film-detail.html?id=${film.id}">${film.title}</a> <strong>(${film.release_date})</strong>
    </li>
    `;
    return template.content;
}

const filmListContainer = document.getElementById('film-list-container');

export default function loadFilmList(allFilms) {
    allFilms.forEach(film => {
        const dom = filmTemplate(film);
        filmListContainer.appendChild(dom);
    });
}