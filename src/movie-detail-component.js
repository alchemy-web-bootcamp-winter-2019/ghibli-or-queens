export function makeMovieTable(movie) {
    const html = `
    <dl>
    <dt>Title:</dt>
    <dd>${movie.title}</dd>
    <dt>Director:</dt>
    <dd>${movie.director}</dd>
    <dt>Description:</dt>
    <dd>"${movie.description}"</dd>
</dl>`;

    const template = document.createElement('template');

    template.innerHTML = html;
    return template.content;

}

const movieTableNode = document.getElementById('movie-table');
export default function loadMovieTable(movie) {
    const movieTable = makeMovieTable(movie);
    movieTableNode.appendChild(movieTable);
}