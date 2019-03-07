export function createListItem(queen) {
    const html = /*html*/`
        <li>
            <img src="${queen.image_url}" alt="Image of ${queen.name}">
            <a href="queen-detail.html?id=${queen.id}">${queen.name}</a>            
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const queenList = document.getElementById('queen-list');

export default function loadQueens(queens) {
    queens.forEach(queen => {
        const dom = createListItem(queen);
        queenList.appendChild(dom);
    });
}