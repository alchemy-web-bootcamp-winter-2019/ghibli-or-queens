export default function makeListTemplate(film) {
    const dom = `<li><a href="detail.html?id=${film.id}">${film.title}</a> <span>(${film.release_date})</span></li>`;

    const template = document.createElement('template');
    template.innerHTML = dom;
    return template.content;
}