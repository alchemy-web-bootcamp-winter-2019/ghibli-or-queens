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
