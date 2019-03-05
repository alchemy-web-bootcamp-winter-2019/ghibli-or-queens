export function createDetail(movie) {
    const html = `
    <dl>
    <span>
        <dt>Title:</dt>          
        <dd>${movie.title}</dd>
    </span>

    <span>
        <dt>Year Released</dt>
        <dd>${movie.release_date}</dd>
    </span>
    </dl>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}