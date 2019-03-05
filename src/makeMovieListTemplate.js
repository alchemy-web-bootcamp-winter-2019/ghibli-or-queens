export function makeMovieListTemplate(movie) {
    const html = `
    <li>
        <a href="${movie.url}">${movie.title} (${movie.release_date})</a>
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

const movieListContainer = document.getElementById('movie-list-container');

export default function loadMovieListTemplate(movieListApi) {
    movieListApi.forEach(movie => {
        const dom = makeMovieListTemplate(movie);
        movieListContainer.appendChild(dom);
    });
}
