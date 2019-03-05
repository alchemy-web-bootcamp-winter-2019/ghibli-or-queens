export function filmTemplate(film) {
    const template = document.createElement('template');
    template.innerHTML = `
    <li>
        <a href="./film.html?id=${film.id}">${film.title}</a><span>(${film.release_date})</span>
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