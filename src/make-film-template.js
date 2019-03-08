export function makeFilmTemplate(film) {
    const html = /*html*/ `
    <dl id="film-detail">
        <dt>Title:</dt>
        <dd>${film.title}</dd>
        <dt>Released:</dt>
        <dd>${film.released}</dd>
        <dt>Description:</dt>
        <dd>${film.description}</dd>
        <dt>Director:</dt>
        <dd>${film.director}</dd>
        <dt>Producer:</dt>
        <dd>${film.producer}</dd>
        <dt>RT Score:</dt>
        <dd>${film.rt_score}</dd>
    </dl>
    `; 
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}