export default function renderListItem(movie) {
    const html = `<li class = "card"><a href="../detailview.html?id=${movie.id}">${movie.title}</a></li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}    

export function createListEntry(filmObject) {
    const ulNode = document.getElementById('film-list');
    filmObject.forEach(filmEntry => {
        console.log(ulNode);
        const dom = renderListItem(filmEntry);
        ulNode.appendChild(dom);
    });
}