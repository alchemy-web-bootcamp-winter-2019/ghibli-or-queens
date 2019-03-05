export function makeQueenDetail(queen) {
    const html = /*html*/
    `
    <dl>
    <dt>Name:</dt>
    <dd>${queen.name}</dd>
    <dt>Winner:</dt>
    <dd>${queen.winner ? 'Yes' : 'No'}</dd>
    <dt>Quote:</dt>
    <dd>${queen.quote}</dd>
    <dt>First Appearance:</dt>
    <dd>Season ${queen.seasons[0].seasonNumber}</dd>
    <dt>Picture</dt>
    <dd><img src="${queen.image_url}"></dd>
    </dl>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const detail = document.getElementById('detail');

export default function loadDetail(queen) {
    const dom = makeQueenDetail(queen);
    detail.appendChild(dom);
}