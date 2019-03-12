export function makeDetailsTemplate(movie) {
    const html = `
        <dl id="dl-movie-description-container">
            <span>
                <dt>Title:</dt>
                <dd>${movie.title}</dd>
            </span>
            <span>
                <dt>Release Date:</dt>
                <dd>${movie.release_date}</dd>
            </span>
            <span>
                <dt>Director:</dt>
                <dd>${movie.director}</dd>
            </span>
            <span>
                <dt>Producer:</dt>
                <dd>${movie.producer}</dd>
            </span>
        </dl>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const movieDetailsContainer = document.getElementById('dl-movie-description-container');

export default function loadMovieDetails(movie) {
    const dom = makeDetailsTemplate(movie);
    movieDetailsContainer.appendChild(dom);
}