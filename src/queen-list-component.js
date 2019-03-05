export function makeQueenList(queen) {
    const html = `
    <ul>
    <li><a href="">${queen.name}</a></li>
</ul>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const queenListNode = document.getElementById('queen-list');

export default function loadQueenList(queens) {
    queens.forEach(queen => {
        const queenLI = makeQueenList(queen);
        queenListNode.appendChild(queenLI);
    });
}