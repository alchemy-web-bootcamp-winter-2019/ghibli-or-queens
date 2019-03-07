
export function makeFilmList(filmName) {
    const html = /*HTML*/` <li id="film"><a href="./description-page.html?id=${filmName.id}">${filmName.title}</a></li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function buildFilmList(movieArray) {
    movieArray.forEach(filmName => {
        const filmListNode = document.getElementById('film');
        const dom = makeFilmList(filmName);
        filmListNode.appendChild(dom);
    });
}