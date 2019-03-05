export function movieListTemplate(movie) {
    const html = `
    <li>
      <a href="details.html?id=${movie.id}">${movie.title}</a>
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

const movieLink = document.getElementById('movie-list');
export default function loadMovieList(moviesLink) {
    moviesLink.forEach(movie => {
        const dom = movieListTemplate(movie);
        movieLink.appendChild(dom);

    });
}
