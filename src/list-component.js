export function makeListTemplate(queen) {
    const html = /*html*/
    `<li><a href="queen-detail.html?id=${queen.id}">${queen.name}</a><img src="${queen.image_url}"></li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const queenList = document.getElementById('queen-list');

export default function loadList(queens) {
    queens.forEach(queen => {
        const dom = makeListTemplate(queen);
        queenList.appendChild(dom);
    });
}