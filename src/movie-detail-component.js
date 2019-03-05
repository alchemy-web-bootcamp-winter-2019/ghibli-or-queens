export function makeMovieTable(movie) {
    const html = `
    <dl>
    <dt>Title:</dt>
    <dd>${movie.title}</dd>
    <dt>Director:</dt>
    <dd>${movie.director}</dd>
    <dt>Producer:</dt>
    <dd>${movie.producer}</dd>
    <dt>Description:</dt>
    <dd>${movie.description}</dd>
    <dt>Release Date:</dt>
    <dd>${movie.release_date}</dd>
    <dt>Rotten Tomatoes Score</dt>
    <dd>${movie.rt_score}</dd>
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