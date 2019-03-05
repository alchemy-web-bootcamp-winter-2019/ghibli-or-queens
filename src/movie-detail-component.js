export function makeMovieTable(queen) {
    const html = `
    <dl>
    <dt>Name:</dt>
    <dd>${queen.name}</dd>
    <dt>Seasons:</dt>
    <dd>${queen.seasons}</dd>
    <dt>Quote:</dt>
    <dd>"${queen.quote}"</dd>
</dl>`;

    const template = document.createElement('template');

    template.innerHTML = html;
    return template.content;

}

const searchParams = new URLSearchParams(window.location.search);
const movieID = searchParams.get('id');
const movieTableNode = document.getElementById('movie-table');
export default function loadMovieTable(movie) {
    const movieTable = makeMovieTable(movie);
    movieTableNode.appendChild(movieTable);
}