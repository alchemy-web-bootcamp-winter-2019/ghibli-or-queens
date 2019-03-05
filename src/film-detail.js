export default function filmDetailTable(film) {
    const template = document.createElement('template');
    template.innerHTML = `
        <tbody>
            <tr>
                <th>Title:</th>
                <td>${film.title}</td>
            </tr>
            <tr>
                <th>Description:</th>
                <td>${film.description}</td>
            </tr>
            <tr>
                <th>Director:</th>
                <td>${film.director}</td>
            </tr>
            <tr>
                <th>Producer:</th>
                <td>${film.producer}</td>
            </tr>
            <tr>
                <th>Year:</th>
                <td>${film.release_date}</td>
            </tr>
            <tr>
                <th>Rotten Tomatoes Score:</th>
                <td>${film.rt_score}</td>
            </tr>
        </tbody>
    `;
    return template.content;
}

const filmDetail = document.getElementById('film-detail-container');

export function loadFilmDetail(film) {
    const dom = filmDetailTable(film);
    filmDetail.appendChild(dom);
}