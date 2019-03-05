export function makeListHtml(movieObject) {
    const html = `
    <li><a href="./film-details.html?id=${movieObject.id}" title="${movieObject.description}">${movieObject.title}</a>(${movieObject.release_date})</li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function buildFilmList(movieArray) {
    movieArray.forEach(movieObject => {
        const filmListNode = document.getElementById('film-list');
        const dom = makeListHtml(movieObject);
        filmListNode.appendChild(dom);
    });
}