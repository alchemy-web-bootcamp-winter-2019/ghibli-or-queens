const template = document.createElement('template');

export function makeListItem(filmObject) {
    const href = /*html*/ 'film-detail.html?id=' + encodeURIComponent(filmObject.id);
    const html =
        `<li>
             <a href = ${href} >${filmObject.title}</a>
         </li>`;
    template.innerHTML = html;
    return template.content;
}
