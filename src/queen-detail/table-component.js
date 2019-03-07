export function makeQueenTable(queen) {
    const html = /*html*/`
        <dl>
            <dt>Name:</dt>
            <dd>${queen.name}</dd>
            <dt>Winner:</dt>
            <dd>${queen.winner ? 'Yes' : 'No'}</dd>
            <dt>Miss Congeniality:</dt>
            <dd>${queen.missCongeniality ? 'Yes' : 'No'}</dd>
            <dt>Quote:</dt>
            <dd>${queen.quote}</dd>
        </dl>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const queenTable = document.getElementById('queen-table');

export default function loadQueenTable(queen) {
    const dom = makeQueenTable(queen);
    queenTable.appendChild(dom);
}