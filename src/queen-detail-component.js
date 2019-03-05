export function makeQueenTable(queen) {
    const html = `
    <dl>
    <dt>Name:</dt>
    <dd>${queen.name}</dd>
    <dt>Seasons:</dt>
    <dd>${queen.seasons}</dd>
    <dt>Quote:</dt>
    <dd>"${queen.quote}"</dd>
</dl>`;

    const template = document.createElement('template');

    template.innerHTML = html;
    return template.content;

}

const searchParams = new URLSearchParams(window.location.search);
const queenID = searchParams.get('id');
const queenTableNode = document.getElementById('queen-table');
export default function loadQueenTable(queen) {
    const queenTable = makeQueenTable(queen);
    queenTableNode.appendChild(queenTable);
}