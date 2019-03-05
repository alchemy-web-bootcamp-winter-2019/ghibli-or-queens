export function makeMovieList(movie) {
    const html = `
    <ul>
    <li><a href="${'movie-detail.html?id=' + movie.id}">${movie.name}</a></li>
</ul>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const movieListNode = document.getElementById('movie-list');

export default function loadMovieList(movies) {
    movies.forEach(movie => {
        const movieLI = makeMovieList(movie);
        movieListNode.appendChild(movieLI);
    });
}