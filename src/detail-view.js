export default function detailTemplate(movie) {
    const html = /*html*/ `
    <dl>
        <dt>Title </dt>
        <dd>${movie.title}</dd>

        <dt>Description </dt>
        <dd>"${movie.description}"</dd>

        <dt>Director </dt>
        <dd>${movie.director}</dd>

        <dt>Release Date </dt>
        <dd>${movie.release_date}</dd>
    </dl>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}